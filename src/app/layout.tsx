import { barlowCondensed, caveat, fredoka, interTight, permanentMarker } from '@/utils/font';
import { Metadata } from 'next';
import Script from 'next/script';
import { ReactNode } from 'react';
import './globals.css';

// Endereço público do site: defina NEXT_PUBLIC_SITE_URL no deploy (a Vercel preenche sozinha).
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3011');

const GTM_ID = 'GTM-K22G956T';

const titulo = 'Matrículas 2027 · Agende sua visita | Escola Normal Rural de Limoeiro do Norte';
const descricao =
  'Da Educação Infantil ao Ensino Médio. Agende uma visita à Escola Normal Rural de Limoeiro do Norte e conheça nossos espaços, projetos e equipe.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: titulo,
  description: descricao,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Escola Normal Rural de Limoeiro do Norte',
    title: 'Matrículas abertas 2027 · Escola Normal',
    description: descricao,
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${interTight.variable} ${fredoka.variable} ${caveat.variable} ${barlowCondensed.variable} ${permanentMarker.variable} bg-white antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {children}
      </body>
    </html>
  );
}
