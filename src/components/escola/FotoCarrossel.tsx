'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

interface FotoCarrosselProps {
  fotos: string[];
  alt: string;
  className?: string;
}

// Carrossel leve com rolagem nativa: arrasta no celular e avança sozinho
const FotoCarrossel = ({ fotos, alt, className }: FotoCarrosselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);

  const irPara = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setAtual(Math.round(track.scrollLeft / Math.max(track.clientWidth, 1)));
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (pausado || fotos.length < 2) return;
    const id = window.setInterval(() => {
      const track = trackRef.current;
      // só avança quando o carrossel está visível (aba ativa)
      if (!track || track.offsetParent === null) return;
      irPara((atual + 1) % fotos.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [atual, pausado, fotos.length, irPara]);

  return (
    <div
      className={cn('relative', className)}
      onMouseEnter={() => setPausado(true)}
      onMouseLeave={() => setPausado(false)}
      onTouchStart={() => setPausado(true)}>
      <div
        ref={trackRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carrossel"
        aria-label={alt}>
        {fotos.map((src, i) => (
          <div
            key={src}
            className="relative h-full w-full shrink-0 snap-center"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${fotos.length}`}>
            <Image
              src={src}
              alt={`${alt} (foto ${i + 1})`}
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
      {fotos.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {fotos.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Ver foto ${i + 1}`}
              aria-current={atual === i}
              onClick={() => {
                setPausado(true);
                irPara(i);
              }}
              className={cn(
                'h-2 cursor-pointer rounded-full bg-white/60 shadow-sm transition-all duration-300',
                atual === i ? 'bg-ns-yellow w-6' : 'w-2 hover:bg-white',
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FotoCarrossel;
