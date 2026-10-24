import { formasPagamento, formatBRL, horario, semanas } from '@/data/colonia';
import Icone from './Icone';
import { Titulo } from './Missoes';

const filhos = ['1 filho', '2 filhos', '3 filhos'];
const semanaCheia = semanas[0];
const semanaCurta = semanas[1];

const Valores = () => (
  <section id="valores" className="px-3 md:px-5">
    <div className="from-heroi-navy to-heroi-blue relative overflow-hidden rounded-[32px] bg-linear-to-b py-16 md:rounded-[40px] md:py-20 lg:py-[100px]">
      <div aria-hidden className="bg-halftone-light pointer-events-none absolute inset-0" />
      <div className="main-container relative">
        <Titulo tag="Escolha suas semanas" light>
          Dezembro de <span className="text-ns-yellow">2026</span>
        </Titulo>

        <div className="grid gap-4 md:grid-cols-3">
          {semanas.map((s, i) => (
            <div key={s.id} className="flex h-full items-center gap-4 rounded-[22px] bg-white p-5 md:p-6">
              <span className="bg-heroi-red flex size-12 shrink-0 items-center justify-center rounded-xl text-white">
                <Icone nome="calendar" className="size-6" />
              </span>
              <div>
                <p className="font-heroi text-heroi-red text-2xl">{s.nome}</p>
                <p className="font-heroi text-heroi-navy text-[28px]">{s.periodo}</p>
                {s.observacao && <p className="text-tagline-3 text-secondary/60">{s.observacao}</p>}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 flex items-center justify-center gap-2 text-white/80">
          <Icone nome="clock" className="text-ns-yellow size-5" /> Todas as manhãs, das {horario}
        </p>

        <div className="mt-14 md:mt-20">
          <h3 className="font-heroi mb-8 text-center text-[36px] text-white md:text-[44px]">
            Valores <span className="text-ns-yellow">por semana</span>
          </h3>
          <div className="grid gap-5 md:grid-cols-3">
            {filhos.map((f, i) => (
              <div
                key={f}
                className={`h-full rounded-[24px] bg-white p-6 md:p-7 ${i === 1 ? 'ring-ns-yellow ring-4' : ''}`}>
                <p className="font-heroi text-heroi-navy text-[32px]">{f}</p>
                <div className="mt-4 space-y-1">
                  <p className="text-tagline-3 text-secondary/60 font-semibold tracking-wide uppercase">
                    1ª e 3ª semana
                  </p>
                  <p className="font-heroi text-heroi-red text-[44px]">{formatBRL(semanaCheia.pix[i])}</p>
                  <p className="text-tagline-2">no PIX ou dinheiro</p>
                  <p className="text-tagline-2 text-secondary font-medium">
                    ou {formatBRL(semanaCheia.cartao[i])} no cartão em até 6x
                  </p>
                </div>
                <div className="border-stroke-2 mt-5 space-y-1 border-t pt-4">
                  <p className="text-tagline-3 text-secondary/60 font-semibold tracking-wide uppercase">
                    2ª semana · 1 dia a menos
                  </p>
                  <p className="text-tagline-1 text-secondary font-semibold">
                    {formatBRL(semanaCurta.pix[i])} PIX/dinheiro · {formatBRL(semanaCurta.cartao[i])} cartão
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-8 grid max-w-[860px] gap-3 text-center text-white/85 md:grid-cols-2 md:text-left">
            <p className="flex items-start justify-center gap-2 text-white/85 md:justify-start">
              <Icone nome="card" className="text-ns-yellow mt-0.5 size-5 shrink-0" />
              Nenhum pagamento é feito nesta página: após a pré-inscrição, nossa equipe entra em contato para o
              pagamento na tesouraria ({formasPagamento}).
            </p>
            <p className="flex items-start justify-center gap-2 text-white/85 md:justify-start">
              <Icone nome="calendar" className="text-ns-yellow mt-0.5 size-5 shrink-0" />
              Para 2 ou 3 semanas, some o valor de cada semana escolhida.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Valores;
