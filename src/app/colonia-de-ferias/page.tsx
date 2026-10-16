import Extras from '@/components/colonia/Extras';
import { ChamadaColonia, FaqColonia, FooterColonia } from '@/components/colonia/FinalColonia';
import HeaderColonia from '@/components/colonia/HeaderColonia';
import HeroColonia from '@/components/colonia/HeroColonia';
import Missoes from '@/components/colonia/Missoes';
import Valores from '@/components/colonia/Valores';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Colônia de Férias 2026 · Academia de Heróis | Escola Normal',
  description:
    'Colônia de Férias da Escola Normal em dezembro: 3 semanas de aventuras, das 7h30 às 11h30. Faça a pré-inscrição e garanta a vaga do seu pequeno herói.',
};

const page = () => (
  <>
    <HeaderColonia />
    <main className="overflow-x-hidden bg-white">
      <HeroColonia />
      <Missoes />
      <Valores />
      <Extras />
      <FaqColonia />
      <ChamadaColonia />
    </main>
    <FooterColonia />
  </>
);

export default page;
