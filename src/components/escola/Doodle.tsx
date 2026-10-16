import { cn } from '@/utils/cn';

type Variant = 'underline' | 'star' | 'sparkle' | 'arrow' | 'arrow-down' | 'loop' | 'circle' | 'zigzag' | 'sun';

interface DoodleProps {
  variant: Variant;
  className?: string;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Rabiscos de caderno: traço irregular, como se feitos à mão
const Doodle = ({ variant, className }: DoodleProps) => {
  const common = { 'aria-hidden': true, className: cn('pointer-events-none select-none', className) };

  switch (variant) {
    case 'underline':
      return (
        <svg {...common} viewBox="0 0 300 24" preserveAspectRatio="none">
          <path {...stroke} strokeWidth={5} d="M4 15c40-8 82-11 128-9 47 2 95 6 164-3" />
          <path {...stroke} strokeWidth={3} d="M30 20c50-5 120-6 210-2" opacity={0.7} />
        </svg>
      );
    case 'star':
      return (
        <svg {...common} viewBox="0 0 48 48">
          <path
            {...stroke}
            strokeWidth={2.6}
            d="M24 4.5c1.8 6.6 3.4 11.6 4.6 13.3 2.1.9 8.4 1.6 14.7 2.1-5.4 3.6-9.7 6.5-11 8.4.4 3.4 2.3 9 3.9 14.6-5.3-3.7-9.4-6.9-12.1-7.6-2.5 1.1-6.9 4.7-12.3 8.2 1.8-5.5 3.6-11 3.5-14.1-1.9-2.4-6.5-5.4-11.3-8.6 6.2-.6 11.9-1.3 14.4-2.4 1.6-2.6 3.6-8 5.6-13.9Z"
          />
        </svg>
      );
    case 'sparkle':
      return (
        <svg {...common} viewBox="0 0 40 40">
          <path
            fill="currentColor"
            d="M20 1c1.4 9.6 3.8 15.4 18 19-14.2 3.6-16.6 9.4-18 19-1.4-9.6-3.8-15.4-18-19C16.2 16.4 18.6 10.6 20 1Z"
          />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common} viewBox="0 0 120 70">
          <path {...stroke} strokeWidth={3} d="M6 14c20-10 44-9 52 6 7 13-7 24-15 15-7-8 6-20 24-17 18 3 32 18 41 38" />
          <path {...stroke} strokeWidth={3} d="M95 41c3 6 6 11 13 16 1-8 1-14 3-21" />
        </svg>
      );
    case 'arrow-down':
      return (
        <svg {...common} viewBox="0 0 60 110">
          <path {...stroke} strokeWidth={3} d="M40 5c-22 10-30 28-20 44 9 14 22 6 15-4-6-8-21 0-22 18-1 15 4 28 10 40" />
          <path {...stroke} strokeWidth={3} d="M12 88c3 7 6 12 11 17 4-6 8-11 14-15" />
        </svg>
      );
    case 'loop':
      return (
        <svg {...common} viewBox="0 0 160 50">
          <path
            {...stroke}
            strokeWidth={3}
            d="M4 34c14-2 22-14 18-22-4-8-16-2-12 10 5 14 26 14 36 0 7-10 1-18-6-14-8 5-2 22 14 24 14 2 22-12 18-20-4-7-15-1-11 10 5 13 27 13 37-1 7-10 2-18-5-14-7 5-1 20 13 23 9 2 20-2 30-8"
          />
        </svg>
      );
    case 'circle':
      return (
        <svg {...common} viewBox="0 0 200 90" preserveAspectRatio="none">
          <path
            {...stroke}
            strokeWidth={3}
            d="M118 8C70 2 18 14 8 40c-9 25 34 44 92 43 59-1 96-20 92-44-4-23-45-34-104-30-24 2-44 7-58 15"
          />
        </svg>
      );
    case 'zigzag':
      return (
        <svg {...common} viewBox="0 0 120 30">
          <path {...stroke} strokeWidth={3} d="M3 20 15 8l11 14L38 7l11 15 12-15 11 15 12-15 11 14 12-13 9 10" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...common} viewBox="0 0 80 80">
          <path {...stroke} strokeWidth={2.6} d="M40 27c-8-.5-14 6-13 14 1 8 9 12 16 10 7-2 10-9 8-15-2-6-6-9-11-9Z" />
          <path
            {...stroke}
            strokeWidth={2.6}
            d="M40 6v11M40 63v11M6 40h11M63 40h11M16 16l8 8M56 56l8 8M64 16l-8 8M24 56l-8 8"
          />
        </svg>
      );
  }
};

export default Doodle;
