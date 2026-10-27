import CopaForm from '@/components/copa/CopaForm';
import { Metadata } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';
import arena from '../../../public/images/copa-en/arena.jpg';
import fotos from '../../../public/images/copa-en/fotos.jpg';
import logo from '../../../public/images/copa-en/logo.png';

const descricao =
  'A emoção da 11ª Copa EN vai além das quadras. Cadastre-se e participe da ação de brindes da Escola Normal para alunos e responsáveis de outras escolas.';

export const metadata: Metadata = {
  title: 'Copa EN 2026 · A torcida também ganha! | Escola Normal',
  description: descricao,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Escola Normal Rural de Limoeiro do Norte',
    title: '11ª Copa EN · A torcida também ganha!',
    description: descricao,
  },
  twitter: { card: 'summary_large_image' },
};

const selos: { icone: ReactNode; titulo: ReactNode; texto: string }[] = [
  {
    icone: <path d="M3 9h18v4H3zM5 13h14v8H5zM12 9v12M12 9c-2-4-6-5-6-2s4 2 6 2c2 0 6 1 6-2s-4-2-6 2Z" />,
    titulo: 'Prêmios',
    texto: 'especiais',
  },
  {
    icone: (
      <>
        <circle cx="12" cy="7" r="3.2" />
        <circle cx="5" cy="9" r="2.4" />
        <circle cx="19" cy="9" r="2.4" />
        <path d="M6.5 20a5.5 5.5 0 0 1 11 0ZM1 19a4 4 0 0 1 5.5-3.7M23 19a4 4 0 0 0-5.5-3.7" />
      </>
    ),
    titulo: (
      <>
        Para alunos
        <br />e responsáveis
      </>
    ),
    texto: 'de outras escolas',
  },
  {
    icone: <path d="m12 2.5 2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8L12 2.5Z" />,
    titulo: 'É gratuito',
    texto: 'e muito simples de participar',
  },
];

// Faixas amarelas pinceladas, como nas artes da Copa EN
const Pincelada = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 400 120" aria-hidden className={className} preserveAspectRatio="none">
    <path
      fill="currentColor"
      d="M0 92 380 8l-6 10 22-4-30 14 30-3L4 116l14-9-18 3 10-8L0 104Z M60 118 400 40v8L120 118Z"
    />
  </svg>
);

// Página de uma seção só, montada em código: fotos dos atletas recortadas da arte da escola,
// logo em alta, título, selos e formulário à direita. As medidas da coluna da esquerda usam cqw
// (largura da própria coluna), então a composição fica igual no celular e no computador.
const page = () => (
  <main className="relative min-h-screen overflow-hidden bg-[#031b65]">
    {/* fundo: arquibancada desfocada, brilhos azuis e faixas amarelas */}
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_15%,#1146e0_0%,#0a2d9c_35%,#031b65_75%)]" />
      <Image
        src={arena}
        alt=""
        fill
        sizes="60vw"
        className="!left-auto !w-[60%] [mask-image:linear-gradient(to_right,transparent,black_35%)] object-cover object-left opacity-50 mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1.2px,transparent_1.4px)] [mask-image:linear-gradient(to_bottom_left,black,transparent_45%)] [background-size:12px_12px]" />
      <Pincelada className="text-copa-yellow absolute -right-10 bottom-0 h-40 w-[420px] opacity-95 md:h-56 md:w-[620px]" />
      <Pincelada className="text-copa-yellow absolute -right-24 bottom-24 hidden h-16 w-[380px] opacity-60 md:block" />
    </div>

    <div className="relative mx-auto grid max-w-[1480px] items-center gap-8 px-4 pb-12 sm:px-6 xl:min-h-screen xl:grid-cols-[minmax(0,1fr)_minmax(0,540px)] xl:items-start xl:gap-12 xl:px-10 xl:pb-6">
      <section
        className="@container relative mx-auto w-full max-w-[900px] text-white xl:max-w-[min(900px,calc((100vh-24px)/1.3))]"
        aria-labelledby="copa-titulo">
        <Image
          src={fotos}
          alt="Atletas da Escola Normal no futsal, no vôlei e no basquete"
          priority
          placeholder="blur"
          sizes="(min-width: 1280px) 900px, 100vw"
          className="absolute top-0 left-0 h-auto w-full [mask-image:linear-gradient(to_bottom,black_72%,transparent),linear-gradient(to_right,transparent,black_5%,black_90%,transparent)] [mask-composite:intersect]"
        />

        <div className="relative pt-[29.4cqw]">
          <Image
            src={logo}
            alt="11ª Copa EN 2026 · Escola Normal Rural"
            priority
            sizes="(min-width: 1280px) 440px, 50vw"
            className="ml-[21.1cqw] h-auto w-[48.9cqw] drop-shadow-[0_18px_30px_rgba(0,8,50,0.6)]"
          />

          <h1 id="copa-titulo" className="font-marker relative -mt-[1.5cqw] w-[92cqw] -rotate-3 text-center text-white">
            <span className="block text-[6.9cqw] drop-shadow-[0_4px_0_rgba(0,8,50,0.45)]">A torcida também</span>
            <span className="text-copa-yellow relative block text-[14.5cqw] drop-shadow-[0_6px_0_rgba(0,8,50,0.45)]">
              Ganha!
            </span>
          </h1>
          <svg
            viewBox="0 0 300 14"
            preserveAspectRatio="none"
            aria-hidden
            className="text-copa-yellow ml-[19cqw] h-[1.8cqw] w-[56cqw] -rotate-2">
            <path d="M0 10C90 2 210 0 300 4 210 5 110 8 8 14Z" fill="currentColor" />
          </svg>

          <p className="mt-[2cqw] w-[92cqw] text-center text-[max(2.7cqw,12px)] leading-snug font-medium text-white">
            A emoção da Copa EN vai além das quadras.
            <br />
            Cadastre-se e participe da nossa{' '}
            <strong className="text-copa-yellow font-extrabold">ação de brindes!</strong>
          </p>

          <ul className="mt-[3cqw] grid w-[92cqw] grid-cols-[0.8fr_1.1fr_1.1fr] gap-[1.6cqw]">
            {selos.map((s, i) => (
              <li
                key={i}
                className="flex items-center gap-[1.6cqw] rounded-[2cqw] border border-[#2f5fe8]/80 bg-[#04165a]/85 px-[1.8cqw] py-[1.8cqw] shadow-[inset_0_0_24px_rgba(40,90,240,0.25)]">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="text-copa-yellow size-[5.5cqw] shrink-0"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={0.6}
                  strokeLinejoin="round">
                  {s.icone}
                </svg>
                <span className="text-[max(1.95cqw,9px)] leading-tight uppercase">
                  <strong className="block font-extrabold">{s.titulo}</strong>
                  <span className="font-medium text-white/85">{s.texto}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CopaForm className="mx-auto w-full max-w-[540px] xl:mt-6 xl:self-center" />
    </div>
  </main>
);

export default page;
