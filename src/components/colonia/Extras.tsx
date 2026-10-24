import { brinde, indicacao } from '@/data/colonia';
import camisetas from '@public/images/colonia/camisetas.jpg';
import Image from 'next/image';

// Brinde da camiseta e promoção "Traga um novo herói"
const Extras = () => (
  <section className="bg-halftone py-16 md:py-20 lg:py-[110px]">
    <div className="main-container grid gap-6 lg:grid-cols-2">
      <div className="border-stroke-2 flex h-full flex-col overflow-hidden rounded-[28px] border bg-white">
        <figure className="bg-[#eef0f4]">
          <Image
            src={camisetas}
            alt="Camiseta exclusiva da Academia de Heróis, frente e costas"
            className="h-auto w-full"
            placeholder="blur"
          />
        </figure>
        <div className="flex flex-1 flex-col justify-between gap-4 p-7 md:p-9">
          <div className="space-y-3">
            <span className="bg-heroi-red font-heroi inline-block -skew-x-6 rounded-lg px-3 py-1 text-lg text-white">
              Brinde especial
            </span>
            <h2 className="font-heroi text-heroi-navy text-[38px] md:text-[46px]">
              Camiseta exclusiva <span className="text-heroi-red">da Academia de Heróis</span>
            </h2>
            <p>{brinde.texto.replace('até 30/10', `até ${brinde.prazo} (${brinde.prazoDia})`)}</p>
          </div>
          <a
            href="#inscricao"
            className="bg-heroi-red hover:bg-heroi-red-dark font-heroi self-start rounded-full px-7 py-3 text-xl text-white transition-colors">
            Quero a camiseta
          </a>
        </div>
      </div>

      <div className="from-heroi-red to-heroi-red-dark relative flex h-full flex-col justify-center gap-6 overflow-hidden rounded-[28px] bg-linear-to-br p-7 text-white md:p-9">
        <div aria-hidden className="bg-halftone-light pointer-events-none absolute inset-0" />
        <div className="relative space-y-4">
          <span className="bg-heroi-navy font-heroi inline-block -skew-x-6 rounded-lg px-3 py-1 text-lg">
            Missão: traga um novo herói!
          </span>
          <p className="font-heroi text-[96px] leading-[0.85] text-white md:text-[128px]">
            {indicacao.desconto}
            <span className="block text-[38px] md:text-[46px]">de desconto para os dois</span>
          </p>
          <p className="max-w-[440px] text-white/90">
            Convide um amiguinho que não estuda na Escola Normal. Inscrevendo-se na mesma semana, você e ele ganham{' '}
            {indicacao.desconto} de desconto.
          </p>
        </div>
        <div className="relative space-y-4">
          <a
            href="#inscricao"
            className="font-heroi text-heroi-red hover:bg-ns-yellow inline-block rounded-full bg-white px-7 py-3 text-xl transition-colors">
            Inscrever com um amigo
          </a>
          <p className="text-tagline-3 text-white/70">{indicacao.regras}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Extras;
