'use client';

import { series } from '@/data/escola';
import { getTrafficData, trackLead } from '@/utils/analytics';
import { cn } from '@/utils/cn';
import { FormEvent, useState } from 'react';
import { formatPhone, inputClass, pillActive, pillClass } from './formStyles';

const quantidades = ['1', '2', '3', '4+'];
const periodos = ['Manhã', 'Tarde'];

const VisitForm = ({ className }: { className?: string }) => {
  const [quantidade, setQuantidade] = useState('1');
  const [periodo, setPeriodo] = useState('Manhã');
  const [telefone, setTelefone] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const totalFilhos = quantidade === '4+' ? 4 : Number(quantidade);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      responsavel: data.get('responsavel'),
      whatsapp: telefone,
      email: data.get('email'),
      quantidadeFilhos: quantidade,
      series: Array.from({ length: totalFilhos }, (_, i) => data.get(`serie-${i}`)),
      periodo,
      trafego: getTrafficData(),
    };
    setStatus('sending');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      trackLead('matricula');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={cn('rounded-4xl bg-white p-8 text-center md:p-11', className)}>
        <span className="bg-ns-yellow text-secondary mx-auto flex size-14 items-center justify-center rounded-full">
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
        <h3 className="font-display text-heading-5 mt-6">Pedido de visita recebido!</h3>
        <p className="text-secondary/70 mx-auto mt-3 max-w-[340px]">
          Nossa equipe de matrículas vai falar com você pelo WhatsApp para combinar o melhor dia da visita.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'space-y-5 rounded-4xl bg-white p-6 shadow-[0_30px_60px_-30px_rgba(28,31,92,0.45)] md:p-9',
        className,
      )}>
      <div className="space-y-1">
        <p className="font-display text-heading-5 text-secondary font-semibold">
          Preencha o formulário e receba seu desconto
        </p>
        <p className="hand text-primary-500 text-[26px]">leva menos de 1 minuto!</p>
      </div>

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

      <div className="grid gap-5 sm:grid-cols-2">
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
        <div className="space-y-2">
          <label htmlFor="email" className="text-tagline-2 text-secondary block font-medium">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="seu@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="text-tagline-2 text-secondary mb-2 block font-medium">
          Quantos filhos quer matricular?
        </legend>
        <div className="flex gap-2">
          {quantidades.map((q) => (
            <button
              type="button"
              key={q}
              aria-pressed={quantidade === q}
              onClick={() => setQuantidade(q)}
              className={cn(pillClass, quantidade === q && pillActive)}>
              {q}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="space-y-3">
        {Array.from({ length: totalFilhos }, (_, i) => (
          <div key={i} className="space-y-2">
            <label htmlFor={`serie-${i}`} className="text-tagline-2 text-secondary block font-medium">
              {totalFilhos === 1 ? 'Série em 2027' : `Série do ${i + 1}º filho em 2027`}
            </label>
            <div className="relative">
              <select
                id={`serie-${i}`}
                name={`serie-${i}`}
                required
                defaultValue=""
                className={cn(inputClass, 'appearance-none pr-12')}>
                <option value="" disabled>
                  Selecione a série
                </option>
                {series.map((g) => (
                  <optgroup key={g.grupo} label={g.grupo}>
                    {g.opcoes.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <svg
                className="text-secondary/60 pointer-events-none absolute top-1/2 right-5 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={8}
                viewBox="0 0 12 8"
                fill="none">
                <path
                  d="m1 1.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
        {quantidade === '4+' && (
          <p className="text-tagline-3 text-secondary/60">
            Informe os quatro primeiros; os demais combinamos na conversa.
          </p>
        )}
      </div>

      <fieldset className="space-y-2">
        <legend className="text-tagline-2 text-secondary mb-2 block font-medium">Melhor período para a visita</legend>
        <div className="flex gap-2">
          {periodos.map((p) => (
            <button
              type="button"
              key={p}
              aria-pressed={periodo === p}
              onClick={() => setPeriodo(p)}
              className={cn(pillClass, periodo === p && pillActive)}>
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-ns-yellow text-secondary hover:bg-secondary w-full cursor-pointer rounded-full px-8 py-4 text-lg font-bold transition-colors duration-300 hover:text-white disabled:opacity-60">
        {status === 'sending' ? 'Enviando…' : 'Quero agendar minha visita'}
      </button>
      {status === 'error' && (
        <p className="text-tagline-2 text-center text-red-600">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
};

export default VisitForm;
