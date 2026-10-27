'use client';

import { getTrafficData, trackLead } from '@/utils/analytics';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { formatPhone, inputClass, pillClass } from '../escola/formStyles';

const perfis = [
  { id: 'aluno', label: 'Aluno de outra escola' },
  { id: 'responsavel', label: 'Responsável' },
  { id: 'visitante', label: 'Outro visitante' },
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
  responsavel: 'Escola do seu filho(a)',
  visitante: 'Escola (opcional)',
};

const labelClass = 'text-tagline-2 text-copa-navy block font-medium';
const ativo = 'border-copa-blue bg-copa-blue hover:border-copa-blue text-white';

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
      if (!res.ok) {throw new Error();}
      trackLead('copa-en');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={cn('rounded-4xl bg-white p-8 text-center md:p-10', className)}>
        <Image src="/images/copa-en/logo.png" alt="Copa EN" width={120} height={128} className="mx-auto h-auto w-28" />
        <p className="font-heroi text-copa-navy mt-6 text-4xl">Você está na torcida!</p>
        <p className="text-secondary/70 mx-auto mt-3 max-w-[340px]">
          Seu cadastro foi feito. Agora é só aproveitar os jogos: fique de olho no WhatsApp para saber dos brindes.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-4 rounded-4xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,10,60,0.8)] md:p-7',
        className,
      )}>
      <div className="space-y-1">
        <p className="font-heroi text-copa-navy text-[32px]">Cadastre-se e concorra</p>
        <p className="text-tagline-2 text-secondary/60">Leva menos de um minuto e é gratuito.</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="nome" className={labelClass}>
          Nome completo
        </label>
        <input id="nome" name="nome" required autoComplete="name" placeholder="Seu nome" className={inputClass} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="whatsapp" className={labelClass}>
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
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            E-mail <span className="text-secondary/50 font-normal">(opcional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <fieldset>
        <legend className={cn(labelClass, 'mb-2')}>Você é</legend>
        <div className="grid grid-cols-3 gap-2">
          {perfis.map((p) => (
            <button
              type="button"
              key={p.id}
              aria-pressed={perfil === p.id}
              onClick={() => {
                setPerfil(p.id);
                setFaltaPerfil(false);
              }}
              className={cn(
                pillClass,
                'hover:border-copa-blue/50 h-auto min-h-11 rounded-2xl px-2 py-2 text-center leading-tight',
                perfil === p.id && ativo,
                faltaPerfil && 'border-red-500',
              )}>
              {p.label}
            </button>
          ))}
        </div>
        {faltaPerfil && <p className="text-tagline-3 mt-2 text-red-600">Escolha uma opção.</p>}
      </fieldset>

      <div className="space-y-2">
        <label htmlFor="escola" className={labelClass}>
          {perfil ? labelEscola[perfil] : 'Escola'}
        </label>
        <input
          id="escola"
          name="escola"
          required={perfil !== 'visitante'}
          placeholder="Nome da escola"
          className={inputClass}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="como-soube" className={labelClass}>
          Como soube da Copa EN?
        </label>
        <div className="relative">
          <select
            id="como-soube"
            name="como-soube"
            required
            defaultValue=""
            className={cn(inputClass, 'appearance-none pr-12')}>
            <option value="" disabled>
              Selecione
            </option>
            {origens.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <svg
            className="text-secondary/60 pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={8}
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden>
            <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <label className="text-tagline-2 text-secondary flex cursor-pointer items-start gap-3">
        <input type="checkbox" name="regulamento" required className="accent-copa-blue mt-0.5 size-4 shrink-0" />
        <span>Li e aceito o regulamento da ação de brindes da Copa EN.</span>
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-copa-yellow hover:bg-copa-yellow-dark font-heroi text-copa-navy w-full cursor-pointer rounded-full px-8 py-4 text-2xl transition-colors duration-300 disabled:opacity-60">
        {status === 'sending' ? 'Enviando…' : 'Quero participar'}
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
