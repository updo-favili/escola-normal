'use client';

import { formatBRL, semanas } from '@/data/colonia';
import { cn } from '@/utils/cn';
import { FormEvent, useMemo, useState } from 'react';
import { formatPhone, inputClass, pillClass } from '../escola/formStyles';

const quantidades = ['1', '2', '3', '4+'];
const pagamentos = [
  { id: 'pix', label: 'PIX ou dinheiro' },
  { id: 'cartao', label: 'Cartão (até 6x)' },
] as const;

const ativo = 'border-heroi-red bg-heroi-red hover:border-heroi-red text-white';

const InscricaoForm = ({ className }: { className?: string }) => {
  const [quantidade, setQuantidade] = useState('1');
  const [escolhidas, setEscolhidas] = useState<string[]>(['semana-1']);
  const [pagamento, setPagamento] = useState<'pix' | 'cartao'>('pix');
  const [alunos, setAlunos] = useState<('sim' | 'nao' | null)[]>([null, null, null, null]);
  const [faltaAluno, setFaltaAluno] = useState(false);
  const [indica, setIndica] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const totalFilhos = quantidade === '4+' ? 4 : Number(quantidade);

  const estimativa = useMemo(() => {
    if (quantidade === '4+' || escolhidas.length === 0) return null;
    return semanas
      .filter((s) => escolhidas.includes(s.id))
      .reduce((soma, s) => soma + s[pagamento][totalFilhos - 1], 0);
  }, [quantidade, escolhidas, pagamento, totalFilhos]);

  const alternarSemana = (id: string) =>
    setEscolhidas((atual) => (atual.includes(id) ? atual.filter((s) => s !== id) : [...atual, id]));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (escolhidas.length === 0) return;
    if (alunos.slice(0, totalFilhos).some((a) => a === null)) {
      setFaltaAluno(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    const payload = {
      origem: 'colonia-de-ferias-2026',
      responsavel: data.get('responsavel'),
      whatsapp: telefone,
      quantidadeFilhos: quantidade,
      criancas: Array.from({ length: totalFilhos }, (_, i) => ({
        nome: data.get(`crianca-${i}`),
        idade: data.get(`idade-${i}`),
        alunoEscolaNormal: alunos[i] === 'sim',
      })),
      semanas: escolhidas,
      pagamento,
      indicacaoAmigo: indica ? data.get('amigo') : null,
      valorEstimado: estimativa,
    };
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={cn('rounded-4xl bg-white p-8 text-center md:p-11', className)}>
        <span className="bg-heroi-red mx-auto flex size-14 items-center justify-center rounded-full text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="font-heroi text-heroi-navy mt-6 text-4xl">Missão aceita!</h3>
        <p className="text-secondary/70 mx-auto mt-3 max-w-[360px]">
          Recebemos sua pré-inscrição. Nossa equipe vai falar com você pelo WhatsApp para confirmar a vaga e o pagamento
          na tesouraria da Escola Normal.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-5 rounded-4xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(11,26,92,0.55)] md:p-8',
        className,
      )}>
      <div className="space-y-1">
        <p className="font-heroi text-heroi-navy text-[34px]">Garanta a vaga do seu herói</p>
        <p className="text-tagline-2 text-secondary/60">Pré-inscrição gratuita e sem pagamento online.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="responsavel" className="text-tagline-2 text-secondary block font-medium">
            Nome do responsável
          </label>
          <input
            id="responsavel"
            name="responsavel"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-tagline-2 text-secondary block font-medium">
            WhatsApp
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            placeholder="(88) 90000-0000"
            pattern="\(\d{2}\) \d{4,5}-\d{4}"
            value={telefone}
            onChange={(e) => setTelefone(formatPhone(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-tagline-2 text-secondary mb-2 block font-medium">Quantos heróis vão participar?</legend>
        <div className="flex gap-2">
          {quantidades.map((q) => (
            <button
              type="button"
              key={q}
              aria-pressed={quantidade === q}
              onClick={() => setQuantidade(q)}
              className={cn(pillClass, quantidade === q && ativo)}>
              {q}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="space-y-3">
        {Array.from({ length: totalFilhos }, (_, i) => (
          <div key={i} className="border-stroke-2 bg-background-1 space-y-3 rounded-2xl border p-3.5">
            <div className="grid grid-cols-[1fr_88px] gap-3">
              <div className="space-y-2">
                <label htmlFor={`crianca-${i}`} className="text-tagline-2 text-secondary block font-medium">
                  {totalFilhos === 1 ? 'Nome da criança' : `Nome do ${i + 1}º herói`}
                </label>
                <input
                  id={`crianca-${i}`}
                  name={`crianca-${i}`}
                  required
                  placeholder="Nome"
                  className={cn(inputClass, 'bg-white')}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor={`idade-${i}`} className="text-tagline-2 text-secondary block font-medium">
                  Idade
                </label>
                <input
                  id={`idade-${i}`}
                  name={`idade-${i}`}
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={17}
                  required
                  placeholder="anos"
                  className={cn(inputClass, 'bg-white px-4 text-center')}
                />
              </div>
            </div>
            <div
              className="flex items-center justify-between gap-3"
              role="group"
              aria-label="Já estuda na Escola Normal?">
              <span className="text-tagline-2 text-secondary font-medium">Já estuda na Escola Normal?</span>
              <div className="flex gap-1.5">
                {(['sim', 'nao'] as const).map((op) => (
                  <button
                    type="button"
                    key={op}
                    aria-pressed={alunos[i] === op}
                    onClick={() => {
                      setAlunos((atual) => atual.map((a, j) => (j === i ? op : a)));
                      setFaltaAluno(false);
                    }}
                    className={cn(
                      pillClass,
                      'h-9 w-16 flex-none',
                      alunos[i] === op && ativo,
                      faltaAluno && alunos[i] === null && 'border-heroi-red',
                    )}>
                    {op === 'sim' ? 'Sim' : 'Não'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
        {faltaAluno && (
          <p className="text-tagline-3 text-heroi-red">Responda se cada criança já estuda na Escola Normal.</p>
        )}
        {quantidade === '4+' && (
          <p className="text-tagline-3 text-secondary/60">
            Informe os quatro primeiros; os demais combinamos na conversa.
          </p>
        )}
      </div>

      <fieldset>
        <legend className="text-tagline-2 text-secondary mb-2 block font-medium">Quais semanas?</legend>
        <div className="grid grid-cols-3 gap-2">
          {semanas.map((s) => {
            const on = escolhidas.includes(s.id);
            return (
              <button
                type="button"
                key={s.id}
                aria-pressed={on}
                onClick={() => alternarSemana(s.id)}
                className={cn(
                  'border-stroke-3 hover:border-heroi-red/50 flex cursor-pointer flex-col items-center rounded-2xl border bg-white px-1 py-2.5 transition-colors',
                  on && 'border-heroi-red bg-heroi-red/5 hover:border-heroi-red',
                )}>
                <span
                  className={cn(
                    'text-tagline-3 sm:text-tagline-2 font-semibold whitespace-nowrap',
                    on ? 'text-heroi-red' : 'text-secondary',
                  )}>
                  {s.nome}
                </span>
                <span className="text-secondary/60 sm:text-tagline-3 text-[11px] whitespace-nowrap">{s.periodo}</span>
              </button>
            );
          })}
        </div>
        {escolhidas.length === 0 && (
          <p className="text-tagline-3 text-heroi-red mt-2">Escolha pelo menos uma semana.</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="text-tagline-2 text-secondary mb-2 block font-medium">Como prefere pagar?</legend>
        <div className="flex gap-2">
          {pagamentos.map((p) => (
            <button
              type="button"
              key={p.id}
              aria-pressed={pagamento === p.id}
              onClick={() => setPagamento(p.id)}
              className={cn(pillClass, pagamento === p.id && ativo)}>
              {p.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="bg-heroi-navy flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-white">
        <span className="text-tagline-2 text-white/75">Valor estimado</span>
        <span className="font-heroi text-ns-yellow text-3xl">
          {estimativa !== null ? formatBRL(estimativa) : quantidade === '4+' ? 'a combinar' : '—'}
        </span>
      </div>

      <div className="space-y-3">
        <label className="text-tagline-2 text-secondary flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            checked={indica}
            onChange={(e) => setIndica(e.target.checked)}
            className="accent-heroi-red mt-0.5 size-4 shrink-0"
          />
          <span>
            Vou trazer um amiguinho que não estuda na Escola Normal{' '}
            <strong className="text-heroi-red">(30% de desconto para os dois)</strong>
          </span>
        </label>
        {indica && (
          <input
            name="amigo"
            required
            placeholder="Nome do amiguinho"
            className={inputClass}
            aria-label="Nome do amiguinho"
          />
        )}
      </div>

      <div className="bg-ns-yellow/25 border-ns-yellow flex items-start gap-3 rounded-2xl border px-4 py-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className="text-heroi-navy mt-0.5 size-5 shrink-0">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v.01M11 11h1v5h1" />
        </svg>
        <p className="text-tagline-2 text-heroi-navy">
          <strong>Nenhum pagamento é feito por aqui.</strong> Depois da pré-inscrição, nossa equipe entra em contato
          pelo WhatsApp para combinar o pagamento na tesouraria.
        </p>
      </div>

      <label className="text-tagline-3 text-secondary/60 flex cursor-pointer items-start gap-3">
        <input type="checkbox" required className="accent-heroi-red mt-0.5 size-4 shrink-0" />
        Autorizo a Escola Normal a entrar em contato pelo WhatsApp sobre a Colônia de Férias.
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-heroi-red hover:bg-heroi-red-dark font-heroi w-full cursor-pointer rounded-full px-8 py-4 text-2xl text-white transition-colors duration-300 disabled:opacity-60">
        {status === 'sending' ? 'Enviando…' : 'Garantir minha vaga'}
      </button>
      <p className="text-tagline-3 text-secondary/50 text-center">
        Valor estimado por semana; o desconto de indicação é aplicado no pagamento.
      </p>
      {status === 'error' && (
        <p className="text-tagline-2 text-center text-red-600">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
};

export default InscricaoForm;
