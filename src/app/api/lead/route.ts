import { formatBRL, semanas } from '@/data/colonia';
import { NextResponse } from 'next/server';

type Crianca = { nome?: string; idade?: string; alunoEscolaNormal?: boolean };

const RD_CONVERSIONS_URL = 'https://api.rd.services/platform/conversions';

type Lead = Record<string, unknown> & {
  origem?: string;
  responsavel: string;
  whatsapp: string;
  email: string;
};

type Trafego = Partial<
  Record<
    | 'utm_source'
    | 'utm_medium'
    | 'utm_campaign'
    | 'utm_term'
    | 'utm_content'
    | 'gclid'
    | 'gbraid'
    | 'wbraid'
    | 'fbclid'
    | 'referrer',
    string
  >
>;

const hostDe = (url?: string) => {
  try {
    return url ? new URL(url).hostname.replace(/^www\./, '') : undefined;
  } catch {
    return undefined;
  }
};

// Origem do lead no RD (campo "Origem"): UTMs quando houver; senão ID de clique de anúncio
// (gclid = Google Ads, fbclid = Meta); senão o site de onde veio; senão "direto".
const toRdTraffic = (trafego: Trafego = {}) => {
  const googleAds = trafego.gclid || trafego.gbraid || trafego.wbraid;
  const fields: Record<string, string> = {
    traffic_source:
      trafego.utm_source ||
      (googleAds ? 'google' : undefined) ||
      (trafego.fbclid ? 'facebook' : undefined) ||
      hostDe(trafego.referrer) ||
      'direto',
  };
  const medium = trafego.utm_medium || (!trafego.utm_source && googleAds ? 'cpc' : undefined);
  if (medium) {
    fields.traffic_medium = medium;
  }
  if (trafego.utm_campaign) {
    fields.traffic_campaign = trafego.utm_campaign;
  }
  if (trafego.utm_term || trafego.utm_content) {
    fields.traffic_value = (trafego.utm_term || trafego.utm_content) as string;
  }
  return fields;
};

// Monta o payload de conversão do RD Station Marketing (o RD identifica o lead pelo e-mail).
// Campos padrão: name, email, mobile_phone. Os demais são campos personalizados (cf_...).
const toRdPayload = (lead: Lead) => {
  const base = {
    name: lead.responsavel,
    email: lead.email,
    mobile_phone: lead.whatsapp,
    ...toRdTraffic(lead.trafego as Trafego | undefined),
  };

  if (lead.origem === 'colonia-de-ferias-2026') {
    const criancas = Array.isArray(lead.criancas) ? (lead.criancas as Crianca[]) : [];
    const nomesSemanas = Array.isArray(lead.semanas)
      ? (lead.semanas as string[]).map((id) => {
          const s = semanas.find((x) => x.id === id);
          return s ? `${s.nome} (${s.periodo})` : id;
        })
      : [];
    return {
      conversion_identifier: 'colonia-de-ferias-2026',
      ...base,
      cf_quantidade_de_filhos: String(lead.quantidadeFilhos ?? ''),
      cf_colonia_criancas: criancas
        .map((c) => `${c.nome}, ${c.idade} anos (${c.alunoEscolaNormal ? 'aluno EN' : 'não aluno'})`)
        .join('; '),
      cf_colonia_tem_aluno_en: criancas.some((c) => c.alunoEscolaNormal) ? 'Sim' : 'Não',
      cf_colonia_semanas: nomesSemanas.join(', '),
      cf_colonia_pagamento: lead.pagamento === 'cartao' ? 'Cartão (até 6x)' : 'PIX ou dinheiro',
      cf_colonia_indicacao_amigo: lead.indicacaoAmigo ? String(lead.indicacaoAmigo) : '',
      cf_colonia_valor_estimado: typeof lead.valorEstimado === 'number' ? formatBRL(lead.valorEstimado) : '',
    };
  }

  const series = Array.isArray(lead.series) ? lead.series.filter(Boolean).join(', ') : '';
  return {
    conversion_identifier: 'matricula-2027-visita',
    ...base,
    cf_quantidade_de_filhos: String(lead.quantidadeFilhos ?? ''),
    cf_series_2027: series,
    cf_periodo_da_visita: String(lead.periodo ?? ''),
  };
};

export async function POST(request: Request) {
  const lead = (await request.json()) as Lead;
  if (!lead?.responsavel || !lead?.whatsapp || !lead?.email) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const apiKey = process.env.RD_API_KEY;
  if (!apiKey) {
    // Sem chave (ex.: variável ainda não criada no deploy) o visitante não vê erro; o lead fica no log.
    console.error('[lead escola-normal] RD_API_KEY não configurada; lead não enviado ao RD', lead);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch(`${RD_CONVERSIONS_URL}?api_key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8', accept: 'application/json' },
    body: JSON.stringify({ event_type: 'CONVERSION', event_family: 'CDP', payload: toRdPayload(lead) }),
  });

  if (!res.ok) {
    console.error('[lead escola-normal] RD Station recusou o lead', res.status, await res.text(), lead);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
