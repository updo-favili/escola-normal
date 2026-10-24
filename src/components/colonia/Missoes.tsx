import { missoes } from '@/data/colonia';
import Icone from './Icone';

export const Titulo = ({ tag, children, light }: { tag: string; children: React.ReactNode; light?: boolean }) => (
  <div className="mb-10 space-y-3 text-center md:mb-14">
    <span className="bg-heroi-red font-heroi inline-block -skew-x-6 rounded-lg px-3 py-1 text-lg text-white">
      {tag}
    </span>
    <h2 className={`font-heroi text-[40px] md:text-[56px] ${light ? 'text-white' : 'text-heroi-navy'}`}>{children}</h2>
  </div>
);

const Missoes = () => (
  <section className="bg-halftone relative py-16 md:py-20 lg:py-[110px]">
    <div className="main-container">
      <Titulo tag="O que vai ter?">
        Missões para os <span className="text-heroi-red">pequenos heróis</span>
      </Titulo>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {missoes.map((m, i) => (
          <div key={m.titulo} className="border-stroke-2 h-full space-y-4 rounded-[24px] border bg-white p-7">
            <span
              className={`flex size-14 -rotate-6 items-center justify-center rounded-2xl text-white ${i % 2 ? 'bg-heroi-blue' : 'bg-heroi-red'}`}>
              <Icone nome={m.icone} className="size-7" />
            </span>
            <h3 className="font-heroi text-heroi-navy text-[28px]">{m.titulo}</h3>
            <p>{m.texto}</p>
          </div>
        ))}
        <a
          href="#inscricao"
          className="bg-heroi-navy group flex h-full min-h-[200px] flex-col justify-between rounded-[24px] p-7 text-white">
          <span className="font-heroi text-[34px] leading-none">
            Vista sua armadura e <span className="text-ns-yellow">prepare seus poderes!</span>
          </span>
          <span className="font-heroi text-heroi-red group-hover:text-ns-yellow mt-6 text-2xl transition-colors">
            Garantir vaga →
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Missoes;
