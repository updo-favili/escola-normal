import { TabProvider } from '@/context/TabContext';
import { segmentos } from '@/data/escola';
import { Fragment } from 'react';
import Doodle from './Doodle';
import FotoCarrossel from './FotoCarrossel';
import Kicker from './Kicker';
import Tab from '../ui/tab/Tab';
import TabContent from '../ui/tab/TabContent';
import TabList from '../ui/tab/TabList';

const Check = () => (
  <span className="bg-primary-50 mt-0.5 hidden size-5 shrink-0 items-center justify-center rounded-full sm:flex">
    <svg xmlns="http://www.w3.org/2000/svg" width={10} height={7} viewBox="0 0 10 7" fill="none">
      <path
        d="M9.125 1.027L3.875 6.277L1.25 3.652"
        stroke="#2a40cc"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const Segmentos = () => {
  return (
    <section id="segmentos" className="bg-grid-paper-soft relative scroll-mt-20 py-16 md:py-20 lg:py-[110px]">
      <Doodle
        variant="star"
        className="text-primary-300 absolute top-14 right-[7%] hidden size-12 rotate-12 md:block"
      />
      <Doodle variant="zigzag" className="text-ns-yellow absolute top-24 left-[6%] hidden w-20 md:block" />
      <div className="main-container relative">
        <div className="mb-10 space-y-4 text-center md:mb-14">
          <Kicker>Níveis de ensino</Kicker>
          <h2 className="font-normal">
            O que a Escola Normal oferece <span className="hand text-primary-500 text-[1.4em]">em cada fase</span>
          </h2>
          <p className="mx-auto max-w-[560px]">Escolha o nível de ensino e veja os destaques.</p>
        </div>

        <div>
          <TabProvider defaultValue={0}>
            <Fragment>
              <TabList variant="desktop" className="!mb-12">
                {segmentos.map((s, i) => (
                  <Tab key={s.id} index={i} variant="desktop">
                    {s.tabLabel}
                  </Tab>
                ))}
              </TabList>
              <TabList variant="mobile" className="!mb-8 justify-center gap-2.5 sm:max-w-none">
                {segmentos.map((s, i) => (
                  <Tab key={s.id} index={i} variant="mobile" className="bg-white text-nowrap">
                    {s.tabLabel}
                  </Tab>
                ))}
              </TabList>
            </Fragment>

            {segmentos.map((s, i) => (
              <TabContent key={s.id} index={i} display="grid" className="grid-cols-12 gap-5 lg:gap-6">
                <div className="bg-secondary col-span-12 flex flex-col overflow-hidden rounded-[24px] lg:col-span-4">
                  <FotoCarrossel fotos={s.fotos} alt={s.fotoAlt} className="aspect-[16/10] shrink-0 overflow-hidden" />
                  <div className="flex flex-1 flex-col justify-between gap-8 p-7 md:p-9">
                    <div className="space-y-4">
                      <p className="text-ns-yellow text-tagline-2 font-semibold tracking-wide uppercase">{s.faixa}</p>
                      <h3 className="text-heading-5 md:text-heading-4 text-accent font-bold">{s.nome}</h3>
                      <p className="text-accent/75">{s.foco}</p>
                    </div>
                    <div className="border-accent/15 border-t pt-6">
                      <p className="text-tagline-3 text-ns-yellow mb-2 font-semibold tracking-wide uppercase">
                        Nosso diferencial
                      </p>
                      <p className="text-accent text-tagline-1">{s.diferencial}</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:gap-6">
                  {s.grupos.map((g) => (
                    <div key={g.titulo} className="space-y-3 rounded-[24px] bg-white p-5 sm:space-y-4 sm:p-6 md:p-7">
                      <p className="font-display text-heading-6 text-secondary font-semibold">{g.titulo}</p>
                      <ul className="flex flex-wrap gap-2 sm:block sm:space-y-2.5">
                        {g.itens.map((item) => (
                          <li
                            key={item}
                            className="text-secondary/80 max-sm:bg-background-3 max-sm:text-tagline-2 sm:text-tagline-1 flex items-start gap-2.5 max-sm:rounded-full max-sm:px-3 max-sm:py-1.5">
                            <Check />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabContent>
            ))}
          </TabProvider>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#agendar"
            className="bg-primary-500 hover:bg-secondary inline-block rounded-full px-9 py-4 text-lg font-semibold text-white transition-colors duration-300">
            Quero conhecer a escola
          </a>
        </div>
      </div>
    </section>
  );
};

export default Segmentos;
