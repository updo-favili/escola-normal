import { ogFontsEscola, ogImage, ogSize } from '@/utils/og';
import { ImageResponse } from 'next/og';

export const alt = 'Escola Normal Rural de Limoeiro do Norte · Matrículas abertas 2027 · Agende sua visita';
export const size = ogSize;
export const contentType = 'image/png';

export default async function Image() {
  const [selo, crest, alunos, fonts] = await Promise.all([
    ogImage('images/escola/selo-matriculas-2027.png'),
    ogImage('images/escola/logo.png'),
    ogImage('images/escola/alunos.png'),
    ogFontsEscola(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#2a40cc',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          padding: '48px 56px',
          fontFamily: 'Fredoka',
        }}>
        {/* texto */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 640 }}>
          <img src={selo} width={250} height={122} style={{ transform: 'rotate(-3deg)', marginLeft: -6 }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 76, color: 'white', lineHeight: 1 }}>Explore um</span>
            <span style={{ fontFamily: 'Caveat', fontSize: 104, color: '#fddc00', lineHeight: 1.05 }}>
              mundo de conhecimentos
            </span>
            <span style={{ fontFamily: 'Inter Tight', fontSize: 28, color: 'rgba(255,255,255,0.85)', marginTop: 14 }}>
              Da Educação Infantil ao Ensino Médio
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ display: 'flex', background: 'white', borderRadius: 18, padding: 8 }}>
              <img src={crest} width={58} height={60} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }}>
              <span style={{ fontSize: 30, fontWeight: 600, lineHeight: 1.1 }}>Escola Normal Rural</span>
              <span style={{ fontFamily: 'Inter Tight', fontSize: 22, color: 'rgba(255,255,255,0.75)' }}>
                Limoeiro do Norte · CE
              </span>
            </div>
          </div>
        </div>
        {/* foto */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: 26,
          }}>
          <div
            style={{
              display: 'flex',
              border: '8px solid white',
              borderRadius: 36,
              overflow: 'hidden',
              transform: 'rotate(2deg)',
              boxShadow: '0 30px 60px rgba(10,20,80,0.45)',
            }}>
            <img src={alunos} width={420} height={329} style={{ objectFit: 'cover' }} />
          </div>
          <span
            style={{
              background: '#fddc00',
              color: '#1c1f5c',
              fontSize: 34,
              fontWeight: 600,
              padding: '8px 26px',
              borderRadius: 999,
            }}>
            Agende sua visita
          </span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
