import logoHerois from '@public/images/colonia/logo-herois.png';
import crest from '@public/images/escola/logo.png';
import Image from 'next/image';

const HeaderColonia = () => (
  <header className="border-stroke-2/70 fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md">
    <div className="main-container flex h-[76px] items-center justify-between gap-4 lg:h-[88px]">
      <a href="/colonia-de-ferias#inscricao" className="flex items-center gap-3">
        <Image
          src={logoHerois}
          alt="Academia de Heróis · Colônia de Férias 2026"
          className="h-11 w-auto lg:h-14"
          priority
        />
        <span className="bg-stroke-3 hidden h-9 w-px sm:block" />
        <Image
          src={crest}
          alt="Escola Normal Rural de Limoeiro do Norte"
          className="hidden h-10 w-auto sm:block lg:h-12"
        />
      </a>
      <a
        href="/colonia-de-ferias#inscricao"
        className="bg-heroi-red hover:bg-heroi-red-dark font-heroi rounded-full px-5 py-2.5 text-lg text-white transition-colors duration-300 md:px-7 md:text-xl">
        Garantir vaga
      </a>
    </div>
  </header>
);

export default HeaderColonia;
