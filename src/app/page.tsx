import ChamadaFinal from '@/components/escola/ChamadaFinal';
import Faq from '@/components/escola/Faq';
import Footer from '@/components/escola/Footer';
import Header from '@/components/escola/Header';
import Hero from '@/components/escola/Hero';
import Jornada from '@/components/escola/Jornada';
import Localizacao from '@/components/escola/Localizacao';
import Segmentos from '@/components/escola/Segmentos';
import Visita from '@/components/escola/Visita';

const page = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        <Hero />
        <Jornada />
        <Segmentos />
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
