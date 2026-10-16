import { brinde, horario } from '@/data/colonia';
import logoHerois from '@public/images/colonia/logo-herois.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Icone from './Icone';
import InscricaoForm from './InscricaoForm';

const destaques = [
  { icone: 'calendar', texto: '3 semanas em dezembro' },
  { icone: 'clock', texto: horario },
  { icone: 'wave', texto: 'Banho de tanque' },
];

// Cantos em vermelho e azul, como nas artes da colônia
const Cantos = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
    <span className="bg-heroi-red absolute -top-16 -left-16 size-40 rotate-45 md:size-56" />
    <span className="bg-heroi-red absolute -right-20 -bottom-20 size-44 rotate-45 md:size-60" />
    <span className="absolute -top-24 right-[12%] h-48 w-24 rotate-[30deg] bg-white/10" />
  </div>
);

const HeroColonia = () => (
  <section id="inscricao" className="scroll-mt-24 px-3 pt-[96px] md:px-5 lg:pt-[108px]">
    <div className="from-heroi-blue to-heroi-navy relative overflow-hidden rounded-[32px] bg-linear-to-br md:rounded-[40px]">
      <div aria-hidden className="bg-halftone-light pointer-events-none absolute inset-0" />
      <Cantos />
      <div className="main-container relative grid grid-cols-12 gap-y-8 py-10 md:gap-y-10 md:py-16 lg:gap-x-10 lg:py-20">
        <div className="col-span-12 space-y-6 self-end text-center lg:col-span-6 lg:text-left">
          <RevealAnimation delay={0.2}>
            <figure className="mx-auto w-full max-w-[340px] rounded-[28px] bg-white p-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] md:max-w-[420px] lg:mx-0">
              <Image
                src={logoHerois}
                alt="Academia de Heróis · Colônia de Férias 2026"
                className="h-auto w-full"
                priority
              />
            </figure>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-3">
              <span className="bg-heroi-red font-heroi inline-block -skew-x-6 rounded-xl px-4 py-1.5 text-xl text-white md:text-2xl">
                Missão: salvem o multiverso!
              </span>
              <h1 className="font-heroi text-[44px] text-white md:text-[64px] xl:text-[72px]">
                A Escola Normal convoca seus <span className="text-ns-yellow">pequenos heróis!</span>
              </h1>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[520px] text-white/80 md:text-lg lg:mx-0">
              Uma Colônia de Férias cheia de aventuras, desafios, brincadeiras e muita diversão, nas manhãs de dezembro.
            </p>
          </RevealAnimation>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:row-span-2 lg:self-center">
          <RevealAnimation delay={0.4} direction="up" offset={60}>
            <div>
              <InscricaoForm className="mx-auto max-w-[540px] lg:max-w-none" />
            </div>
          </RevealAnimation>
        </div>

        <div className="col-span-12 space-y-6 self-start lg:col-span-6">
          <RevealAnimation delay={0.5}>
            <ul className="flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {destaques.map((d) => (
                <li
                  key={d.texto}
                  className="text-tagline-1 flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 font-medium text-white backdrop-blur-sm">
                  <Icone nome={d.icone} className="text-ns-yellow size-5" />
                  {d.texto}
                </li>
              ))}
            </ul>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="bg-ns-yellow text-heroi-navy mx-auto flex max-w-[520px] items-center gap-4 rounded-2xl px-5 py-4 text-left lg:mx-0">
              <Icone nome="gift" className="size-9 shrink-0" />
              <p className="text-tagline-1 text-heroi-navy font-semibold">
                Inscreva-se até {brinde.prazo} ({brinde.prazoDia}) e ganhe a{' '}
                <strong className="font-extrabold">camiseta exclusiva</strong> da Academia de Heróis.
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </div>
  </section>
);

export default HeroColonia;
