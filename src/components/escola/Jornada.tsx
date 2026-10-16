import { segmentos } from '@/data/escola';
import alunos from '@public/images/escola/alunos.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Doodle from './Doodle';
import Kicker from './Kicker';

const Jornada = () => {
  return (
    <section className="bg-grid-paper relative overflow-hidden py-16 md:py-20 lg:py-[110px]">
      <Doodle variant="zigzag" className="text-ns-yellow absolute top-10 right-[8%] hidden w-24 md:block" />
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-16 xl:gap-[90px]">
          <RevealAnimation delay={0.2} direction="left" offset={60}>
            <div className="relative w-full max-w-[520px] lg:max-w-[540px]">
              <Doodle variant="star" className="text-ns-yellow absolute -top-6 -left-5 z-10 size-12 -rotate-12" />
              <Doodle variant="arrow" className="text-primary-500 absolute -right-16 -bottom-10 z-10 hidden w-28 rotate-[200deg] lg:block" />
              <figure className="bg-primary-500 overflow-hidden rounded-[32px] border-4 border-white shadow-[0_20px_50px_-25px_rgba(28,31,92,0.5)]">
                <Image
                  src={alunos}
                  alt="Alunos da Escola Normal com o uniforme da escola"
                  className="h-auto w-full object-cover"
                  placeholder="blur"
                />
              </figure>
            </div>
          </RevealAnimation>

          <div className="w-full flex-1 space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <RevealAnimation delay={0.2}>
                <Kicker>Uma escola para todas as fases</Kicker>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="font-normal">
                  Do Infantil 1 à <span className="hand text-primary-500 text-[1.4em]">3ª série do Ensino Médio</span>
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="mx-auto max-w-[520px] lg:mx-0">
                  Seu filho pode crescer na mesma escola, com uma proposta que acompanha cada fase: do acolhimento dos
                  primeiros anos à preparação para o ENEM.
                </p>
              </RevealAnimation>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {segmentos.map((s, i) => (
                <RevealAnimation key={s.id} delay={0.4 + i * 0.1}>
                  <li>
                    <a
                      href={`#segmentos`}
                      className="bg-background-3 hover:bg-primary-50 flex h-full flex-col gap-1 rounded-[20px] p-5 transition-colors">
                      <span className="text-primary-500 text-tagline-2 font-bold">0{i + 1}</span>
                      <span className="font-display text-heading-6 text-secondary font-semibold">{s.nome}</span>
                      <span className="text-tagline-2 text-secondary/60">{s.faixa}</span>
                    </a>
                  </li>
                </RevealAnimation>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jornada;
