'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef, useState } from 'react';

interface CelularVideoProps {
  src: string;
  poster: string;
  titulo: string;
  className?: string;
}

// Mockup de celular com vídeo vertical: toca sem som quando aparece na tela
const CelularVideo = ({ src, poster, titulo, className }: CelularVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mudo, setMudo] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const alternarSom = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMudo(video.muted);
    if (!video.muted) video.play().catch(() => {});
  };

  return (
    <div className={cn('relative mx-auto w-[240px] md:w-[270px]', className)}>
      <div className="rounded-[46px] bg-[#111827] p-[10px] shadow-[0_40px_80px_-30px_rgba(28,31,92,0.6)] ring-1 ring-black/10">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[36px] bg-black">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
            aria-label={titulo}
            className="h-full w-full object-cover"
          />
          {/* ilha do celular */}
          <span aria-hidden className="absolute top-2.5 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          <button
            type="button"
            onClick={alternarSom}
            aria-label={mudo ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
            className="absolute right-3 bottom-3 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
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
      {/* botões laterais */}
      <span aria-hidden className="absolute top-28 -left-[3px] h-12 w-[3px] rounded-l bg-[#111827]" />
      <span aria-hidden className="absolute top-44 -left-[3px] h-12 w-[3px] rounded-l bg-[#111827]" />
      <span aria-hidden className="absolute top-36 -right-[3px] h-16 w-[3px] rounded-r bg-[#111827]" />
    </div>
  );
};

export default CelularVideo;
