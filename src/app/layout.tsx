import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';
import { AppContextProvider } from '@/context/AppContext';
import { barlowCondensed, caveat, fredoka, interTight } from '@/utils/font';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matrículas 2027 · Agende sua visita | Escola Normal Rural de Limoeiro do Norte',
  description:
    'Da Educação Infantil ao Ensino Médio. Agende uma visita à Escola Normal Rural de Limoeiro do Norte e conheça nossos espaços, projetos e equipe.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${interTight.variable} ${fredoka.variable} ${caveat.variable} ${barlowCondensed.variable} bg-white antialiased`}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
            <Suspense>
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </Suspense>
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
