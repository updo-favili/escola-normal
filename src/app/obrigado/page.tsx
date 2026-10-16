import Doodle from '@/components/escola/Doodle';
import Footer from '@/components/escola/Footer';
import Header from '@/components/escola/Header';
import Kicker from '@/components/escola/Kicker';
import { contato } from '@/data/escola';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pedido de visita recebido | Escola Normal Rural de Limoeiro do Norte',
  robots: { index: false, follow: false },
};

const passos = [
  'Nossa equipe de matrículas vai chamar você pelo WhatsApp.',
  'Vocês combinam o melhor dia e horário para a visita.',
  `É só vir conhecer a escola: ${contato.endereco}, ${contato.cidade}.`,
];

const page = () => (
  <>
    <Header />
    <main className="bg-grid-paper relative overflow-hidden px-3 pt-[120px] pb-20 md:px-5 lg:pt-[150px] lg:pb-28">
      <Doodle variant="star" className="text-ns-yellow absolute top-32 left-[8%] hidden size-14 -rotate-12 md:block" />
      <Doodle variant="sun" className="text-primary-300 absolute right-[7%] bottom-16 hidden size-20 md:block" />
      <div className="main-container max-w-[760px] text-center">
        <span className="bg-ns-yellow text-secondary mx-auto flex size-20 -rotate-6 items-center justify-center rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24" fill="none">
            <path
              d="M20 6 9 17l-5-5"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="mt-8 space-y-4">
          <Kicker>Pedido recebido</Kicker>
          <h1 className="font-normal">
            Obrigado! <span className="hand text-primary-500 text-[1.3em]">Sua visita está a caminho</span>
          </h1>
          <p className="mx-auto max-w-[540px] md:text-lg">
            Recebemos o seu pedido de visita à Escola Normal. Em breve falamos com você.
          </p>
        </div>

        <ol className="border-stroke-2 mx-auto mt-10 max-w-[560px] space-y-4 rounded-[24px] border bg-white p-6 text-left md:p-8">
          {passos.map((p, i) => (
            <li key={p} className="flex items-start gap-4">
              <span className="bg-primary-500 hand flex size-9 shrink-0 items-center justify-center rounded-full text-[22px] text-white">
                {i + 1}
              </span>
              <p className="text-secondary/80 pt-1.5">{p}</p>
            </li>
          ))}
        </ol>

        <Link
          href="/"
          className="bg-primary-500 hover:bg-secondary mt-10 inline-block rounded-full px-9 py-4 text-lg font-semibold text-white transition-colors duration-300">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
    <Footer />
  </>
);

export default page;
