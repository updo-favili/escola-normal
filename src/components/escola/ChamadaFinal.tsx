import seloMatriculas from '@public/images/escola/selo-matriculas-2027.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import Doodle from './Doodle';

const ChamadaFinal = () => {
  return (
    <section className="px-3 py-16 md:px-5 md:py-20">
      <RevealAnimation delay={0.2}>
        <div className="bg-secondary main-container relative bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] overflow-hidden rounded-[32px] !px-6 py-12 md:rounded-[40px] md:!px-14 md:py-16">
          <Doodle variant="sparkle" className="text-ns-yellow absolute top-8 left-8 size-6" />
          <Doodle variant="star" className="absolute right-10 bottom-8 size-10 rotate-12 text-white/25" />
          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-[620px] space-y-4">
              <h2 className="text-accent font-normal">
                Venha ver de perto a escola <span className="hand text-ns-yellow text-[1.4em]">que seu filho merece</span>
              </h2>
              <p className="text-accent/75">As matrículas para 2027 estão abertas. Agende sua visita.</p>
              <a
                href="#agendar"
                className="bg-ns-yellow text-secondary mt-4 inline-block rounded-full px-9 py-4 text-lg font-bold transition-colors duration-300 hover:bg-white">
                Agendar minha visita
              </a>
            </div>
            <figure className="w-full max-w-[300px] rotate-3 lg:max-w-[340px]">
              <Image src={seloMatriculas} alt="Matrículas abertas 2027" className="h-auto w-full" />
            </figure>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default ChamadaFinal;
