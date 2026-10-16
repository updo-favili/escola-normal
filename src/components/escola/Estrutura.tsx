import { estrutura } from '@/data/escola';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Doodle from './Doodle';
import Kicker from './Kicker';

// No celular os cards viram uma faixa com rolagem lateral, para a página não ficar longa
const Estrutura = () => (
  <section className="bg-grid-paper relative overflow-hidden py-16 md:py-20 lg:py-[110px]">
    <Doodle variant="sparkle" className="text-ns-yellow absolute top-14 left-[8%] hidden size-8 md:block" />
    <Doodle variant="zigzag" className="text-primary-300 absolute top-24 right-[7%] hidden w-20 md:block" />
    <div className="main-container">
      <div className="mb-10 space-y-4 text-center md:mb-14">
        <RevealAnimation delay={0.2}>
          <Kicker>Nossa estrutura</Kicker>
        </RevealAnimation>
        <RevealAnimation delay={0.3}>
          <h2 className="font-normal">
            Espaços pensados para <span className="hand text-primary-500 text-[1.4em]">aprender e conviver</span>
          </h2>
        </RevealAnimation>
      </div>

      <RevealAnimation delay={0.3}>
        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {estrutura.map((e) => (
            <li
              key={e.nome}
              className="border-stroke-2 w-[78%] shrink-0 snap-center overflow-hidden rounded-[22px] border bg-white sm:w-auto">
              <figure className="relative aspect-[4/3]">
                <Image
                  src={e.foto}
                  alt={e.nome}
                  fill
                  sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 80vw"
                  className="object-cover"
                />
              </figure>
              <div className="space-y-1.5 p-5">
                <h3 className="font-display text-heading-6 text-secondary font-semibold">{e.nome}</h3>
                <p className="text-tagline-2">{e.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </RevealAnimation>
      <p className="hand text-primary-500 mt-2 text-center text-[22px] sm:hidden">arraste para ver mais →</p>
    </div>
  </section>
);

export default Estrutura;
