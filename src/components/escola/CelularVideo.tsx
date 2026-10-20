'use client';

import { cn } from '@/utils/cn';
import { TouchEvent, useCallback, useEffect, useRef, useState } from 'react';

export interface VideoReel {
  src: string;
  poster: string;
  titulo: string;
  legenda: string;
}

interface CelularVideoProps {
  videos: VideoReel[];
  perfil: string;
  className?: string;
}

const Icone = ({ d, label }: { d: string; label: string }) => (
  <span className="flex flex-col items-center gap-0.5 text-white drop-shadow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden>
      <path d={d} />
    </svg>
    <span className="text-[10px] font-semibold">{label}</span>
  </span>
);

// Mockup de celular no estilo Reels/TikTok: os vídeos tocam em sequência
// e, ao terminar um, o "dedo" desliza e o próximo sobe no lugar
const CelularVideo = ({ videos, perfil, className }: CelularVideoProps) => {
  const caixaRef = useRef<HTMLDivElement>(null);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  const visivel = useRef(false);
  const toqueY = useRef<number | null>(null);
  const [atual, setAtual] = useState(0);
  const [anterior, setAnterior] = useState<number | null>(null);
  const [deslizando, setDeslizando] = useState(false);
  const [mudo, setMudo] = useState(true);
  // só baixa os vídeos quando o celular chega perto da tela (antes disso, fica só a capa):
  // no 4G eles disputavam banda com o resto da página logo na abertura
  const [perto, setPerto] = useState(false);

  const tocarAtual = useCallback(() => {
    refs.current.forEach((v, i) => {
      if (!v) return;
      if (i === atual && visivel.current) v.play().catch(() => {});
      else v.pause();
    });
  }, [atual]);

  // toca só quando o celular está na tela
  useEffect(() => {
    const alvo = caixaRef.current;
    if (!alvo) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visivel.current = entry.isIntersecting;
        tocarAtual();
      },
      { threshold: 0.35 },
    );
    observer.observe(alvo);
    return () => observer.disconnect();
  }, [tocarAtual]);

  useEffect(() => {
    const alvo = caixaRef.current;
    if (!alvo || perto) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setPerto(true), {
      rootMargin: '600px 0px',
    });
    observer.observe(alvo);
    return () => observer.disconnect();
  }, [perto]);

  // ao trocar de vídeo (ou quando os vídeos acabam de ganhar o src), o atual começa do início
  useEffect(() => {
    const v = refs.current[atual];
    if (v) v.currentTime = 0;
    tocarAtual();
  }, [atual, perto, tocarAtual]);

  const avancar = useCallback(
    (comGesto: boolean) => {
      if (videos.length < 2 || deslizando) return;
      const ir = () => {
        setAnterior(atual);
        setAtual((atual + 1) % videos.length);
        setDeslizando(false);
      };
      if (comGesto) {
        setDeslizando(true);
        window.setTimeout(ir, 700);
      } else {
        ir();
      }
    },
    [atual, deslizando, videos.length],
  );

  const alternarSom = () => {
    const novo = !mudo;
    setMudo(novo);
    refs.current.forEach((v) => {
      if (v) v.muted = novo;
    });
    if (!novo) refs.current[atual]?.play().catch(() => {});
  };

  const onTouchStart = (e: TouchEvent) => {
    toqueY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (toqueY.current !== null && toqueY.current - e.changedTouches[0].clientY > 40) avancar(false);
    toqueY.current = null;
  };

  return (
    <div ref={caixaRef} className={cn('relative mx-auto w-[240px] md:w-[270px]', className)}>
      <div className="rounded-[46px] bg-[#111827] p-[10px] shadow-[0_40px_80px_-30px_rgba(28,31,92,0.6)] ring-1 ring-black/10">
        <div
          className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-black"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}>
          {videos.map((v, i) => {
            const pos = i === atual ? '0%' : i === anterior ? '-100%' : '100%';
            const anima = i === atual || i === anterior;
            return (
              <div
                key={v.src}
                className={cn(
                  'absolute inset-0',
                  anima && 'transition-transform duration-[650ms] ease-[cubic-bezier(.22,.9,.3,1)]',
                )}
                style={{ transform: `translateY(${pos})` }}
                aria-hidden={i !== atual}>
                <video
                  ref={(el) => {
                    refs.current[i] = el;
                  }}
                  src={perto ? v.src : undefined}
                  poster={v.poster}
                  muted={mudo}
                  playsInline
                  preload={perto && i === atual ? 'auto' : 'none'}
                  aria-label={v.titulo}
                  onEnded={() => i === atual && avancar(true)}
                  className="h-full w-full object-cover"
                />
                {/* legenda no estilo Reels */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-3.5 pt-16 pr-14 pb-4">
                  <p className="flex items-center gap-1.5 text-[12px] font-semibold text-white">
                    <span className="bg-ns-yellow text-secondary flex size-6 items-center justify-center rounded-full text-[9px] font-bold">
                      EN
                    </span>
                    {perfil}
                  </p>
                  <p className="mt-1.5 text-[11.5px] leading-snug text-white/90">{v.legenda}</p>
                </div>
              </div>
            );
          })}

          {/* ícones laterais */}
          <div className="pointer-events-none absolute right-2.5 bottom-20 flex flex-col items-center gap-3.5">
            <Icone label="curtir" d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
            <Icone label="comentar" d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
            <Icone label="enviar" d="m22 3-9.5 18-2-8-8-2L22 3Z" />
          </div>

          {/* ilha do celular */}
          <span aria-hidden className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* dedo deslizando para o próximo vídeo */}
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute bottom-16 left-1/2 z-10 opacity-0',
              deslizando && 'animate-deslizar',
            )}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={46}
              height={46}
              viewBox="0 0 24 24"
              fill="white"
              stroke="#1c1f5c"
              strokeWidth={1}
              strokeLinejoin="round">
              <path d="M9 11V4.5a1.5 1.5 0 0 1 3 0V10l5.2.9a2 2 0 0 1 1.7 2.2l-.6 5A3 3 0 0 1 15.3 21h-4.6a3 3 0 0 1-2.4-1.2L5 15.5a1.5 1.5 0 0 1 2.3-1.9L9 15.5V11Z" />
            </svg>
          </div>

          <button
            type="button"
            onClick={alternarSom}
            aria-label={mudo ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute top-12 right-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M11 5 6 9H2v6h4l5 4V5Z" />
              {mudo ? <path d="m23 9-6 6m0-6 6 6" /> : <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />}
            </svg>
          </button>
        </div>
      </div>
      {/* botões laterais do aparelho */}
      <span aria-hidden className="absolute top-28 -left-[3px] h-12 w-[3px] rounded-l bg-[#111827]" />
      <span aria-hidden className="absolute top-44 -left-[3px] h-12 w-[3px] rounded-l bg-[#111827]" />
      <span aria-hidden className="absolute top-36 -right-[3px] h-16 w-[3px] rounded-r bg-[#111827]" />
    </div>
  );
};

export default CelularVideo;
