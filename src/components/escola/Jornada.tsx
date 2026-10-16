import { segmentos } from '@/data/escola';
import RevealAnimation from '../animation/RevealAnimation';
import CelularVideo from './CelularVideo';
import Doodle from './Doodle';
import Kicker from './Kicker';

const Jornada = () => {
  return (
    <section className="bg-grid-paper relative overflow-hidden py-16 md:py-20 lg:py-[110px]">
      <Doodle variant="zigzag" className="text-ns-yellow absolute top-10 right-[8%] hidden w-24 md:block" />
      <div className="main-container">
        <div className="flex flex-col items-center gap-y-14 lg:flex-row lg:gap-16 xl:gap-[90px]">
          <RevealAnimation delay={0.2} direction="left" offset={60}>
            <div className="relative w-full max-w-[420px] lg:w-[420px]">
              <Doodle
                variant="star"
                className="text-ns-yellow absolute top-4 left-2 z-10 size-12 -rotate-12 md:left-6"
              />
              <Doodle
                variant="sparkle"
                className="text-primary-500 absolute right-4 bottom-24 z-10 size-7 md:right-8"
              />
              <CelularVideo
                src="/videos/lab-infantil.mp4"
                poster="/videos/lab-infantil-capa.jpg"
                titulo="Crianças da Educação Infantil no laboratório da Escola Normal"
              />
              <div className="mt-4 flex items-center justify-center gap-2">
                <Doodle variant="arrow" className="text-primary-500 w-16 -scale-x-100 rotate-[160deg]" />
                <span className="hand text-primary-500 text-[24px]">aula no laboratório infantil!</span>
              </div>
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
