import seloMatriculas from '@public/images/escola/selo-matriculas-2027.png';
import seloRedacao from '@public/images/escola/selo-redacao.png';
import Image from 'next/image';
import Doodle from './Doodle';
import VisitForm from './VisitForm';

const destaques = [
  'Da Educação Infantil (a partir de 1 ano) ao Ensino Médio',
  'Laboratórios, esportes, artes e inglês desde os 2 anos',
  'Acompanhamento com nutricionista, psicóloga e psicomotricista',
];

const Hero = () => {
  return (
    <section id="agendar" className="scroll-mt-24 px-3 pt-[96px] md:px-5 lg:pt-[108px]">
      <div className="bg-grid-paper-blue relative overflow-hidden rounded-[32px] md:rounded-[40px]">
        {/* rabiscos de caderno */}
        <Doodle
          variant="sparkle"
          className="text-ns-yellow absolute top-8 right-6 size-7 md:top-10 md:right-10 lg:right-[44%]"
        />
        <Doodle variant="star" className="absolute bottom-8 left-6 hidden size-10 rotate-12 text-white/30 md:block" />
        <Doodle
          variant="loop"
          className="absolute bottom-6 left-1/2 hidden w-40 -translate-x-1/2 text-white/25 lg:block"
        />
        <Doodle variant="sun" className="text-ns-yellow/70 absolute -right-4 -bottom-4 size-24 lg:size-28" />
        <div className="main-container relative grid grid-cols-12 gap-y-8 py-10 md:gap-y-10 md:py-16 lg:gap-x-10 lg:py-20 xl:gap-x-16">
          <div className="col-span-12 space-y-5 self-end text-center md:space-y-8 lg:col-span-6 lg:text-left xl:col-span-7">
            <figure className="mx-auto w-[190px] -rotate-3 md:w-[230px] lg:mx-0">
              <Image src={seloMatriculas} alt="Matrículas abertas 2027" className="h-auto w-full" priority />
            </figure>
            {/* título e texto sem animação de entrada: aparecem no primeiro desenho da página (LCP no PageSpeed) */}
            <h1 className="text-accent mx-auto max-w-[620px] font-normal lg:mx-0">
              Explore um{' '}
              <span className="hand text-ns-yellow relative inline-block text-[1.4em]">
                mundo de conhecimentos
                <Doodle variant="underline" className="text-ns-yellow/80 absolute -bottom-2 left-0 h-3 w-full" />
              </span>
            </h1>
            <p className="text-accent/80 mx-auto max-w-[540px] md:text-lg lg:mx-0">
              Da Educação Infantil ao Ensino Médio, a Escola Normal acompanha seu filho do primeiro passo ao vestibular.
              Agende uma visita e conheça de perto nossos espaços, projetos e equipe.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:row-span-2 lg:self-center xl:col-span-5">
            <div>
              <VisitForm className="mx-auto max-w-[520px] lg:max-w-none" />
            </div>
          </div>
          <div className="col-span-12 space-y-8 self-start lg:col-span-6 xl:col-span-7">
            <ul className="mx-auto max-w-[520px] space-y-3 text-left lg:mx-0">
              {destaques.map((item) => (
                <li key={item} className="text-accent flex items-start gap-3">
                  <span className="bg-ns-yellow mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width={11} height={8} viewBox="0 0 10 8" fill="none">
                      <path
                        d="M9.125 1.375L3.875 6.625L1.25 4"
                        stroke="#1c1f5c"
                        strokeWidth={1.6}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <figure className="mx-auto w-full max-w-[280px] lg:mx-0">
              <Image
                src={seloRedacao}
                alt="4 vezes 1º lugar em redação em Limoeiro: 2020, 2021, 2022 e 2023"
                className="h-auto w-full"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
