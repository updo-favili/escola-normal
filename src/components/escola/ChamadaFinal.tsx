import alunos from '@public/images/escola/alunos.png';
import seloMatriculas from '@public/images/escola/selo-matriculas-2027.png';
import Image from 'next/image';
import Doodle from './Doodle';

const ChamadaFinal = () => {
  return (
    <section className="px-3 py-16 md:px-5 md:py-20">
      <div className="bg-secondary main-container relative overflow-hidden rounded-[32px] bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px] !px-6 py-12 md:rounded-[40px] md:!px-14 md:py-16">
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
          <figure className="relative mb-8 w-full max-w-[340px] shrink-0 rotate-2 lg:mb-0 lg:max-w-[400px]">
            {/* selo flutuando sobre a foto */}
            <div className="animate-flutuar absolute -bottom-10 -left-2 z-10 w-[170px] md:-bottom-12 md:-left-14 md:w-[220px]">
              <Image
                src={seloMatriculas}
                alt="Matrículas abertas 2027"
                className="h-auto w-full -rotate-6 drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)]"
              />
            </div>
            <div className="overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]">
              <Image
                src={alunos}
                alt="Alunos da Escola Normal com o uniforme da escola"
                className="h-auto w-full"
                placeholder="blur"
              />
            </div>
            <Doodle variant="sparkle" className="text-ns-yellow absolute -top-4 -right-3 size-9" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default ChamadaFinal;
