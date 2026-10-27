import CopaForm from '@/components/copa/CopaForm';
import { Metadata } from 'next';
import Image from 'next/image';
import arte from '../../../public/images/copa-en/arte.jpg';

const descricao =
  'A emoção da 11ª Copa EN vai além das quadras. Cadastre-se e participe da ação de brindes da Escola Normal para alunos e responsáveis de outras escolas.';

export const metadata: Metadata = {
  title: 'Copa EN 2026 · A torcida também ganha! | Escola Normal',
  description: descricao,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Escola Normal Rural de Limoeiro do Norte',
    title: '11ª Copa EN · A torcida também ganha!',
    description: descricao,
  },
  twitter: { card: 'summary_large_image' },
};

// Arte da escola com logo, título e selos já aplicados; o formulário ocupa o espaço livre à direita.
// No celular e no tablet a arte é recortada na metade esquerda e o formulário vem logo abaixo.
const page = () => (
  <main className="relative min-h-screen overflow-x-hidden bg-[#001a5f] xl:flex xl:items-center">
    <h1 className="sr-only">11ª Copa EN · A torcida também ganha!</h1>
    <p className="sr-only">
      A emoção da Copa EN vai além das quadras. Cadastre-se e participe da nossa ação de brindes: prêmios especiais,
      para alunos e responsáveis de outras escolas, gratuito e muito simples de participar.
    </p>

    <div className="relative mx-auto aspect-[900/1024] w-full max-w-[640px] xl:absolute xl:inset-0 xl:aspect-auto xl:max-w-none">
      <Image
        src={arte}
        alt="11ª Copa EN 2026: a torcida também ganha! Prêmios especiais, para alunos e responsáveis de outras escolas, gratuito."
        fill
        priority
        placeholder="blur"
        sizes="(min-width: 1280px) 100vw, (min-width: 640px) 640px, 100vw"
        className="object-cover object-left xl:object-[left_80%]"
      />
    </div>

    <div className="relative z-10 px-4 pt-2 pb-12 sm:px-6 xl:ml-[57vw] xl:w-[min(460px,38vw)] xl:px-0 xl:py-10">
      <CopaForm className="mx-auto max-w-[520px]" />
    </div>
  </main>
);

export default page;
