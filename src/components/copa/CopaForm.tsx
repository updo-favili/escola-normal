'use client';

import { getTrafficData, trackLead } from '@/utils/analytics';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { FormEvent, ReactNode, useState } from 'react';
import { formatPhone } from '../escola/formStyles';

// Link do regulamento da ação de brindes: enquanto não houver, o texto aparece sem link
const REGULAMENTO_URL: string | null = null;

// Ícones de traço (estilo Lucide), como no mockup da escola
const Icone = ({ children, className }: { children: ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={cn('size-5 shrink-0', className)}>
    {children}
  </svg>
);

const icones = {
  usuario: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3l-4.5 1.5Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4.5 4.5 0 0 1-2.8-2.8l.8-1-1-2L9 8.5Z" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  escola: (
    <>
      <path d="M3 21h18M5 21V10l7-5 7 5v11" />
      <path d="M10 21v-4h4v4M9 12h.01M15 12h.01M12 9.5h.01" />
    </>
  ),
  megafone: (
    <>
      <path d="M3 10v4h3l8 5V5L6 10H3Z" />
      <path d="M7 14.5 8.5 20h2.5l-1-4.2M18 9a4 4 0 0 1 0 6" />
    </>
  ),
  formatura: (
    <>
      <path d="m2 9 10-5 10 5-10 5L2 9Z" />
      <path d="M6 11v5c2 2 10 2 12 0v-5M22 9v5" />
    </>
  ),
  familia: (
    <>
      <circle cx="8" cy="7" r="3" />
      <circle cx="16" cy="7" r="3" />
      <circle cx="12" cy="13" r="2.2" />
      <path d="M2.5 20a5.5 5.5 0 0 1 7-5.3M21.5 20a5.5 5.5 0 0 0-7-5.3M8.5 21a3.5 3.5 0 0 1 7 0" />
    </>
  ),
};

const perfis = [
  { id: 'aluno', label: 'Aluno(a) de outra escola', icone: icones.formatura },
  { id: 'responsavel', label: 'Pai, mãe ou responsável', icone: icones.familia },
  { id: 'visitante', label: 'Outro visitante', icone: icones.usuario },
] as const;

type Perfil = (typeof perfis)[number]['id'];

const origens = [
  'Instagram',
  'WhatsApp',
  'Indicação de amigo ou familiar',
  'Na própria Copa EN (cartaz ou QR Code)',
  'Site da Escola Normal',
  'Outro',
];

const labelEscola: Record<Perfil, string> = {
  aluno: 'Em qual escola você estuda?',
  responsavel: 'Em qual escola seu filho(a) estuda?',
  visitante: 'Escola (opcional)',
};

// No computador (xl) o formulário fica mais compacto; no celular mantém o tamanho confortável para o toque
const labelClass = 'text-tagline-2 text-copa-navy mb-2 block font-semibold xl:mb-1.5 xl:text-[13px]';
const campoClass =
  'border-stroke-3 text-tagline-1 placeholder:text-secondary/45 focus:border-copa-royal text-secondary h-12 w-full rounded-xl xl:h-10 xl:text-sm border bg-white pr-4 pl-12 font-normal transition-colors focus:outline-none';
const iconeCampo = 'text-secondary/55 pointer-events-none absolute top-1/2 left-4 -translate-y-1/2';

const CopaForm = ({ className }: { className?: string }) => {
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [faltaPerfil, setFaltaPerfil] = useState(false);
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!perfil) {
      setFaltaPerfil(true);
      return;
    }
    const data = new FormData(event.currentTarget);
    const payload = {
      origem: 'copa-en-2026',
      responsavel: data.get('nome'),
      whatsapp: telefone,
      email: data.get('email'),
      perfil: perfis.find((p) => p.id === perfil)?.label,
      escola: data.get('escola'),
      comoSoube: data.get('como-soube'),
      aceitouRegulamento: data.get('regulamento') === 'on',
      trafego: getTrafficData(),
    };
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error();
      }
      trackLead('copa-en');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={cn('rounded-3xl bg-white p-8 text-center md:p-10', className)}>
        <Image src="/images/copa-en/logo.png" alt="Copa EN" width={120} height={128} className="mx-auto h-auto w-28" />
        <p className="text-copa-navy mt-6 text-[30px] leading-tight font-extrabold uppercase">
          Você está na <span className="text-copa-royal">torcida!</span>
        </p>
        <p className="text-secondary/70 mx-auto mt-3 max-w-[340px]">
          Seu cadastro foi feito e suas 2 chances estão garantidas. Fique de olho no WhatsApp para saber dos brindes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-4 rounded-3xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,10,60,0.8)] md:p-8 xl:space-y-3 xl:p-6',
        className,
      )}>
      <div>
        <p className="text-copa-navy text-[28px] leading-[1.05] font-extrabold tracking-tight uppercase md:text-[34px] xl:text-[26px]">
          Participe da nossa <span className="text-copa-royal block">ação de brindes!</span>
        </p>
        <svg
          viewBox="0 0 300 12"
          preserveAspectRatio="none"
          aria-hidden
          className="text-copa-yellow mt-1.5 h-2.5 w-[78%]">
          <path d="M2 9C80 3 190 1.5 298 4.5 200 4.8 100 7 6 11.5Z" fill="currentColor" />
        </svg>
        <p className="text-tagline-1 text-secondary mt-3">
          Preencha seus dados e garanta <strong className="text-copa-navy">2 chances</strong> de ganhar!
        </p>
      </div>

      <div>
        <label htmlFor="nome" className={labelClass}>
          Nome completo
        </label>
        <div className="relative">
          <Icone className={iconeCampo}>{icones.usuario}</Icone>
          <input
            id="nome"
            name="nome"
            required
            autoComplete="name"
            placeholder="Digite seu nome completo"
            className={campoClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="whatsapp" className={labelClass}>
            WhatsApp
          </label>
          <div className="relative">
            <Icone className={iconeCampo}>{icones.whatsapp}</Icone>
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
              className={campoClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="font-normal">(opcional)</span>
          </label>
          <div className="relative">
            <Icone className={iconeCampo}>{icones.email}</Icone>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              className={campoClass}
            />
          </div>
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>Você é:</legend>
        <div className="grid grid-cols-3 gap-2">
          {perfis.map((p) => {
            const on = perfil === p.id;
            return (
              <button
                type="button"
                key={p.id}
                aria-pressed={on}
                onClick={() => {
                  setPerfil(p.id);
                  setFaltaPerfil(false);
                }}
                className={cn(
                  'border-stroke-3 text-tagline-3 sm:text-tagline-2 text-secondary hover:border-copa-royal/50 flex min-h-[60px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border bg-white px-2 py-2.5 text-center leading-tight transition-colors sm:flex-row sm:gap-2.5 sm:text-left xl:min-h-[52px] xl:gap-2 xl:px-2 xl:!text-[12px]',
                  on && 'border-copa-royal bg-copa-royal hover:border-copa-royal text-white',
                  faltaPerfil && 'border-red-500',
                )}>
                <Icone className={cn('size-6', !on && 'text-secondary/70')}>{p.icone}</Icone>
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
        {faltaPerfil && <p className="text-tagline-3 mt-2 text-red-600">Escolha uma opção.</p>}
      </fieldset>

      <div>
        <label htmlFor="escola" className={labelClass}>
          {perfil ? labelEscola[perfil] : labelEscola.aluno}
        </label>
        <div className="relative">
          <Icone className={iconeCampo}>{icones.escola}</Icone>
          <input
            id="escola"
            name="escola"
            required={perfil !== 'visitante'}
            placeholder="Nome da sua escola"
            className={campoClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="como-soube" className={labelClass}>
          Como ficou sabendo da Copa EN?
        </label>
        <div className="relative">
          <Icone className={iconeCampo}>{icones.megafone}</Icone>
          <select
            id="como-soube"
            name="como-soube"
            required
            defaultValue=""
            className={cn(campoClass, 'invalid:text-secondary/45 appearance-none pr-12')}>
            <option value="" disabled>
              Selecione uma opção
            </option>
            {origens.map((o) => (
              <option key={o} value={o} className="text-secondary">
                {o}
              </option>
            ))}
          </select>
          <Icone className="text-secondary/70 pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2">
            <path d="m6 9 6 6 6-6" />
          </Icone>
        </div>
      </div>

      <label className="text-tagline-2 text-secondary flex cursor-pointer items-center gap-3 pt-1">
        <input
          type="checkbox"
          name="regulamento"
          required
          className="accent-copa-royal border-stroke-3 size-5 shrink-0 rounded"
        />
        <span>
          Li e aceito o{' '}
          {REGULAMENTO_URL ? (
            <a
              href={REGULAMENTO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-copa-royal font-semibold underline underline-offset-2">
              regulamento
            </a>
          ) : (
            <strong className="text-copa-royal font-semibold">regulamento</strong>
          )}{' '}
          da ação de brindes.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-copa-yellow hover:bg-copa-yellow-dark text-copa-navy flex w-full cursor-pointer items-center justify-center gap-3 rounded-full px-8 py-4 text-xl font-extrabold uppercase shadow-[0_10px_24px_-12px_rgba(246,184,32,0.9)] transition-colors duration-300 disabled:opacity-60 md:text-2xl xl:py-3 xl:!text-lg">
        {status === 'sending' ? (
          'Enviando…'
        ) : (
          <>
            Quero participar
            <Icone className="size-6">
              <path d="M5 12h14M13 6l6 6-6 6" strokeWidth={2.4} />
            </Icone>
          </>
        )}
      </button>
      {status === 'error' && (
        <p className="text-tagline-2 text-center text-red-600">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
};

export default CopaForm;
