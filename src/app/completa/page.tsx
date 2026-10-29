import { Metadata } from 'next';
import ChamadaFinal from '@/components/escola/ChamadaFinal';
import Estrutura from '@/components/escola/Estrutura';
import Faq from '@/components/escola/Faq';
import Footer from '@/components/escola/Footer';
import Header from '@/components/escola/Header';
import Hero from '@/components/escola/Hero';
import Jornada from '@/components/escola/Jornada';
import Localizacao from '@/components/escola/Localizacao';
import Segmentos from '@/components/escola/Segmentos';
import Visita from '@/components/escola/Visita';

// Versão longa da LP de matrículas 2027, guardada para comparação. A principal (/) é a curta.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  alternates: { canonical: '/' },
};

const page = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        <Hero />
        <Jornada />
        <Segmentos />
        <Estrutura />
        <Visita />
        <Faq />
        <Localizacao />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  );
};

export default page;
