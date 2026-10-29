import Estrutura from '@/components/escola/Estrutura';
import Footer from '@/components/escola/Footer';
import Header from '@/components/escola/Header';
import Hero from '@/components/escola/Hero';
import Visita from '@/components/escola/Visita';

// Versão curta da LP de matrículas 2027. A versão completa continua em /completa.
const page = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden bg-white">
        <Hero />
        <Estrutura />
        <Visita />
      </main>
      <Footer />
    </>
  );
};

export default page;
