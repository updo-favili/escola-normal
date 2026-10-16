import logo from '@public/images/escola/logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stroke-2/70 bg-white/90 backdrop-blur-md">
      <div className="main-container flex h-[76px] items-center justify-between gap-4 lg:h-[88px]">
        <a href="/#agendar" className="flex items-center gap-3">
          <Image src={logo} alt="Escola Normal Rural de Limoeiro do Norte" className="h-12 w-auto lg:h-14" priority />
          <span className="text-secondary hidden leading-tight sm:block">
            <span className="block font-bold">Escola Normal Rural</span>
            <span className="text-tagline-2 text-secondary/60">Limoeiro do Norte</span>
          </span>
        </a>
        <a
          href="/#agendar"
          className="bg-primary-500 hover:bg-secondary rounded-full px-5 py-2.5 text-tagline-2 font-semibold text-white transition-colors duration-300 md:px-7 md:py-3 md:text-tagline-1">
          Agendar visita
        </a>
      </div>
    </header>
  );
};

export default Header;
