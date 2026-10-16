import { FooterColonia } from '@/components/colonia/FinalColonia';
import HeaderColonia from '@/components/colonia/HeaderColonia';
import Icone from '@/components/colonia/Icone';
import { brinde, indicacao } from '@/data/colonia';
import logoHerois from '@public/images/colonia/logo-herois.png';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Pré-inscrição recebida · Colônia de Férias 2026 | Escola Normal',
  robots: { index: false, follow: false },
};

const passos = [
  'Nossa equipe chama você pelo WhatsApp para confirmar a vaga.',
  'O pagamento é feito na tesouraria da Escola Normal: PIX, dinheiro ou cartão em até 6x.',
  'Pronto! Seu pequeno herói está convocado para a missão.',
];

const page = () => (
  <>
    <HeaderColonia />
    <main className="bg-halftone px-3 pt-[96px] pb-16 md:px-5 lg:pt-[108px] lg:pb-24">
      <div className="from-heroi-blue to-heroi-navy relative overflow-hidden rounded-[32px] bg-linear-to-br px-6 py-12 text-center md:rounded-[40px] md:py-16">
        <div aria-hidden className="bg-halftone-light pointer-events-none absolute inset-0" />
        <span aria-hidden className="bg-heroi-red absolute -top-16 -left-16 size-40 rotate-45" />
        <span aria-hidden className="bg-heroi-red absolute -right-16 -bottom-16 size-40 rotate-45" />
        <div className="relative mx-auto max-w-[720px] space-y-6">
          <figure className="mx-auto w-full max-w-[300px] rounded-[24px] bg-white p-4">
            <Image
              src={logoHerois}
              alt="Academia de Heróis · Colônia de Férias 2026"
              className="h-auto w-full"
              priority
            />
          </figure>
          <h1 className="font-heroi text-[52px] text-white md:text-[80px]">
            Missão <span className="text-ns-yellow">aceita!</span>
          </h1>
          <p className="mx-auto max-w-[540px] text-white/85 md:text-lg">
            Obrigado! Recebemos a sua pré-inscrição na Colônia de Férias da Escola Normal.
          </p>
        </div>
      </div>

      <div className="main-container mt-10 grid max-w-[1000px] gap-5 md:mt-14 md:grid-cols-[1.3fr_1fr]">
        <div className="border-stroke-2 rounded-[24px] border bg-white p-6 md:p-8">
          <h2 className="font-heroi text-heroi-navy text-[34px]">Próximos passos</h2>
          <ol className="mt-5 space-y-4">
            {passos.map((p, i) => (
              <li key={p} className="flex items-start gap-4">
                <span className="bg-heroi-red font-heroi flex size-9 shrink-0 items-center justify-center rounded-lg text-xl text-white">
                  {i + 1}
                </span>
                <p className="text-secondary/80 pt-1">{p}</p>
              </li>
            ))}
          </ol>
          <p className="bg-ns-yellow/25 border-ns-yellow text-heroi-navy text-tagline-2 mt-6 rounded-2xl border px-4 py-3">
            <strong>Nenhum pagamento foi feito por aqui.</strong> Fique de olho no WhatsApp: é por lá que a equipe vai
            falar com você.
          </p>
        </div>
        <div className="space-y-5">
          <div className="bg-ns-yellow text-heroi-navy flex items-start gap-4 rounded-[24px] p-6">
            <Icone nome="gift" className="size-9 shrink-0" />
            <p className="text-heroi-navy font-semibold">
              Inscrições realizadas até {brinde.prazo} ({brinde.prazoDia}) ganham a camiseta exclusiva da Academia de
              Heróis.
            </p>
          </div>
          <div className="from-heroi-red to-heroi-red-dark rounded-[24px] bg-linear-to-br p-6 text-white">
            <p className="font-heroi text-[30px] text-white">Traga um novo herói!</p>
            <p className="mt-2 text-white/90">
              Indique um amiguinho que não estuda na Escola Normal: inscrevendo-se na mesma semana, vocês dois ganham{' '}
              {indicacao.desconto} de desconto.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/colonia-de-ferias"
          className="bg-heroi-red hover:bg-heroi-red-dark font-heroi inline-block rounded-full px-9 py-4 text-2xl text-white transition-colors">
          Voltar para a Colônia de Férias
        </Link>
      </div>
    </main>
    <FooterColonia />
  </>
);

export default page;
