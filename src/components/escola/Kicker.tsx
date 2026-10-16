import { cn } from '@/utils/cn';
import Doodle from './Doodle';

// Anotação escrita à mão acima dos títulos
const Kicker = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn('hand text-primary-500 inline-flex items-center gap-2 text-[26px] md:text-[30px]', className)}>
    <Doodle variant="sparkle" className="text-ns-yellow size-5 shrink-0" />
    {children}
  </span>
);

export default Kicker;
