import { ogFontsColonia, ogImage, ogSize } from '@/utils/og';
import { ImageResponse } from 'next/og';

export const alt = 'Academia de Heróis · Colônia de Férias 2026 da Escola Normal · Pré-inscrições abertas';
export const size = ogSize;
export const contentType = 'image/png';

const red = '#e5232f';
const navy = '#0b1a5c';

export default async function Image() {
  const [logo, camisetas, fonts] = await Promise.all([
    ogImage('images/colonia/logo-herois.png'),
    ogImage('images/colonia/camisetas.jpg'),
    ogFontsColonia(),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundImage: `linear-gradient(135deg, #1d3fd0 0%, ${navy} 100%)`,
          padding: '44px 56px',
          fontFamily: 'Barlow Condensed',
          fontStyle: 'italic',
          overflow: 'hidden',
        }}>
        {/* retícula e cantos vermelhos, como nas artes */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.16) 1.6px, transparent 1.8px)',
            backgroundSize: '16px 16px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -110,
            left: -110,
            width: 220,
            height: 220,
            background: red,
            transform: 'rotate(45deg)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -120,
            right: -120,
            width: 240,
            height: 240,
            background: red,
            transform: 'rotate(45deg)',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 640 }}>
          <div
            style={{
              display: 'flex',
              background: 'white',
              borderRadius: 26,
              padding: '14px 20px',
              alignSelf: 'flex-start',
            }}>
            <img src={logo} width={380} height={220} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
              <span
                style={{
                  background: red,
                  color: 'white',
                  fontSize: 34,
                  fontWeight: 800,
                  padding: '4px 16px',
                  borderRadius: 10,
                  textTransform: 'uppercase',
                }}>
                Missão: salvem o multiverso!
              </span>
            </div>
            <span
              style={{
                color: 'white',
                fontSize: 64,
                fontWeight: 900,
                textTransform: 'uppercase',
                lineHeight: 1,
                marginTop: 14,
              }}>
              Colônia de Férias
            </span>
            <span
              style={{ color: '#fddc00', fontSize: 64, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
              30/11 a 18/12
            </span>
            <span
              style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 800,
                textTransform: 'uppercase',
                lineHeight: 1.1,
                marginTop: 6,
              }}>
              Manhãs das 7h30 às 11h30
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            gap: 22,
          }}>
          <div
            style={{
              display: 'flex',
              borderRadius: 26,
              overflow: 'hidden',
              border: '6px solid white',
              transform: 'rotate(2deg)',
            }}>
            <img src={camisetas} width={400} height={254} style={{ objectFit: 'cover' }} />
          </div>
          <span
            style={{
              background: '#fddc00',
              color: navy,
              fontSize: 36,
              fontWeight: 900,
              padding: '8px 22px',
              borderRadius: 999,
              textTransform: 'uppercase',
            }}>
            Pré-inscrições abertas
          </span>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
