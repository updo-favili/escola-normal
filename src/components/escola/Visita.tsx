import Doodle from './Doodle';
import Kicker from './Kicker';

const passos = [
  {
    numero: '01',
    titulo: 'Preencha o formulário',
    texto: 'Conte quantos filhos e para qual série. Leva menos de um minuto.',
  },
  {
    numero: '02',
    titulo: 'Combinamos pelo WhatsApp',
    texto: 'Nossa equipe de matrículas fala com você para marcar o melhor dia e horário.',
  },
  {
    numero: '03',
    titulo: 'Venha conhecer a escola',
    texto: 'Visite os espaços, conheça a proposta pedagógica e tire suas dúvidas pessoalmente.',
  },
];

const Visita = () => {
  return (
    <section className="bg-grid-paper relative overflow-hidden py-16 md:py-20 lg:py-[110px]">
      <Doodle variant="sun" className="text-ns-yellow absolute top-10 left-[6%] hidden size-16 md:block" />
      <div className="main-container">
        <div className="mb-10 space-y-4 text-center md:mb-14">
          <Kicker>Como funciona</Kicker>
          <h2 className="font-normal">
            Sua visita em <span className="hand text-primary-500 text-[1.4em]">3 passos</span>
          </h2>
        </div>
        <div className="relative grid gap-5 md:grid-cols-3 lg:gap-8">
          <Doodle
            variant="arrow"
            className="text-primary-500 absolute -top-12 left-[calc(33.3%-40px)] z-10 hidden w-20 -rotate-6 md:block"
          />
          <Doodle
            variant="arrow"
            className="text-primary-500 absolute -top-12 left-[calc(66.6%-40px)] z-10 hidden w-20 rotate-3 md:block"
          />
          {passos.map((p, i) => (
            <div
              key={p.numero}
              className="border-stroke-2 relative h-full space-y-5 rounded-[24px] border bg-white p-7 md:p-9">
              <span className="bg-ns-yellow text-secondary hand flex size-14 -rotate-6 items-center justify-center rounded-full text-[30px]">
                {p.numero}
              </span>
              <div className="space-y-2">
                <h3 className="text-heading-6 text-secondary font-semibold">{p.titulo}</h3>
                <p>{p.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visita;
