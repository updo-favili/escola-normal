import { Barlow_Condensed, Caveat, Fredoka, Inter_Tight, Permanent_Marker } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-interTight',
  display: 'swap',
  // Só os pesos usados nas páginas: cada peso a mais é um arquivo de fonte a baixar.
  weight: ['400', '500', '600', '700', '800'],
});

// Títulos arredondados e destaques cursivos, com cara de caderno escolar
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['700'],
  preload: false,
});

// Títulos da Colônia de Férias, no estilo das artes da Academia de Heróis
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['800'],
  style: ['italic'],
  preload: false,
});

// Título pincelado da Copa EN ("A torcida também ganha!")
const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  variable: '--font-marker',
  display: 'swap',
  weight: ['400'],
  preload: false,
});

export { barlowCondensed, caveat, fredoka, interTight, permanentMarker };
