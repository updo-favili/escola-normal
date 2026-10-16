import { contato } from '@/data/escola';
import logo from '@public/images/escola/logo.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-stroke-2 border-t bg-white">
      <div className="main-container flex flex-col items-center gap-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="Escola Normal Rural de Limoeiro do Norte" className="h-12 w-auto" />
          <div className="text-secondary leading-tight">
            <p className="font-bold">Escola Normal Rural</p>
            <p className="text-tagline-2 text-secondary/60">{contato.endereco} · {contato.cidade}</p>
          </div>
        </div>
      </div>
      <p className="text-tagline-3 text-secondary/50 border-stroke-2 border-t py-5 text-center">
        © {new Date().getFullYear()} Escola Normal Rural de Limoeiro do Norte
      </p>
    </footer>
  );
};

export default Footer;
