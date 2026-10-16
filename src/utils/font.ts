import { Barlow_Condensed, Caveat, Fredoka, Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-interTight',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

// Títulos arredondados e destaques cursivos, com cara de caderno escolar
const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['500', '600', '700'],
});

// Títulos da Colônia de Férias, no estilo das artes da Academia de Heróis
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap',
  weight: ['600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

export { barlowCondensed, caveat, fredoka, interTight };
