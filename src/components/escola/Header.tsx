import logo from '@public/images/escola/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stroke-2/70 bg-white/90 backdrop-blur-md">
      <div className="main-container flex h-[76px] items-center justify-between gap-4 lg:h-[88px]">
        <a href="#agendar" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image src={logo} alt="Escola Normal Rural de Limoeiro do Norte" className="h-11 w-auto sm:h-12 lg:h-14" priority />
          <span className="text-secondary min-w-0 leading-tight">
            <span className="block text-sm font-bold whitespace-nowrap sm:text-base">Escola Normal Rural</span>
            <span className="text-tagline-3 sm:text-tagline-2 text-secondary/60 whitespace-nowrap">Limoeiro do Norte</span>
          </span>
        </a>
        <a
          href="#agendar"
          className="bg-primary-500 hover:bg-secondary rounded-full px-5 py-2.5 text-tagline-2 font-semibold text-white transition-colors duration-300 md:px-7 md:py-3 md:text-tagline-1">
          Agendar visita
        </a>
      </div>
    </header>
  );
};

export default Header;
