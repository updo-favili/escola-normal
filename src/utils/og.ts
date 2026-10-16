import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Recursos das imagens de compartilhamento (WhatsApp, redes sociais), lidos no build
export const ogSize = { width: 1200, height: 630 };

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));

export const ogImage = async (publicPath: string) => {
  const ext = publicPath.split('.').pop() === 'png' ? 'png' : 'jpeg';
  const data = await readFile(join(process.cwd(), 'public', publicPath), 'base64');
  return `data:image/${ext};base64,${data}`;
};

export const ogFontsEscola = async () => [
  {
    name: 'Fredoka',
    data: await font('fredoka', 'fredoka-latin-400-normal.woff'),
    weight: 400 as const,
    style: 'normal' as const,
  },
  {
    name: 'Fredoka',
    data: await font('fredoka', 'fredoka-latin-600-normal.woff'),
    weight: 600 as const,
    style: 'normal' as const,
  },
  {
    name: 'Caveat',
    data: await font('caveat', 'caveat-latin-700-normal.woff'),
    weight: 700 as const,
    style: 'normal' as const,
  },
  {
    name: 'Inter Tight',
    data: await font('inter-tight', 'inter-tight-latin-400-normal.woff'),
    weight: 400 as const,
    style: 'normal' as const,
  },
  {
    name: 'Inter Tight',
    data: await font('inter-tight', 'inter-tight-latin-600-normal.woff'),
    weight: 600 as const,
    style: 'normal' as const,
  },
];

export const ogFontsColonia = async () => [
  {
    name: 'Barlow Condensed',
    data: await font('barlow-condensed', 'barlow-condensed-latin-800-italic.woff'),
    weight: 800 as const,
    style: 'italic' as const,
  },
  {
    name: 'Barlow Condensed',
    data: await font('barlow-condensed', 'barlow-condensed-latin-900-italic.woff'),
    weight: 900 as const,
    style: 'italic' as const,
  },
  {
    name: 'Inter Tight',
    data: await font('inter-tight', 'inter-tight-latin-600-normal.woff'),
    weight: 600 as const,
    style: 'normal' as const,
  },
];
