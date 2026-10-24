import { contato } from '@/data/escola';
import Doodle from './Doodle';
import Kicker from './Kicker';

const Localizacao = () => {
  return (
    <section className="bg-grid-paper relative overflow-hidden py-16 md:py-20 lg:py-[110px]" aria-label="Onde estamos">
      <Doodle variant="star" className="text-ns-yellow absolute top-12 right-[8%] hidden size-12 rotate-12 md:block" />
      <div className="main-container">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-12">
          <div className="col-span-12 space-y-6 text-center lg:col-span-5 lg:text-left">
            <div className="space-y-4">
              <Kicker>Onde estamos</Kicker>
              <h2 className="font-normal">
                Venha nos <span className="hand text-primary-500 text-[1.4em]">fazer uma visita</span>
              </h2>
            </div>
            <div className="border-stroke-2 relative mx-auto max-w-[440px] space-y-4 rounded-[24px] border bg-white p-6 text-left md:p-7 lg:mx-0">
              <div className="flex items-start gap-4">
                <span className="bg-primary-50 text-primary-500 flex size-11 shrink-0 items-center justify-center rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinejoin="round"
                    />
                    <circle cx={12} cy={9.5} r={2.5} stroke="currentColor" strokeWidth={1.8} />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-heading-6 text-secondary font-semibold">{contato.endereco}</p>
                  <p className="text-tagline-2">{contato.bairro}</p>
                </div>
              </div>
              <a
                href={contato.comoChegar}
                target="_blank"
                rel="noopener"
                className="border-primary-500 text-primary-500 hover:bg-primary-500 mt-2 flex w-full items-center justify-center gap-2 rounded-full border-2 px-6 py-3 font-semibold transition-colors duration-300 hover:text-white">
                Como chegar
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <Doodle variant="sparkle" className="text-ns-yellow absolute -top-4 -left-3 z-10 size-8" />
              <div className="overflow-hidden rounded-[28px] border-4 border-white shadow-[0_20px_50px_-25px_rgba(28,31,92,0.5)]">
                <iframe
                  title="Mapa da Escola Normal Rural de Limoeiro do Norte"
                  src={contato.mapaEmbed}
                  className="block h-[320px] w-full md:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Localizacao;
