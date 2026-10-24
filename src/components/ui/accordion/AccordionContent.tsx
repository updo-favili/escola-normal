'use client';

import { cn } from '@/utils/cn';
import { FC, ReactNode } from 'react';
import { useAccordion } from './Accordion';

export interface AccordionContentProps {
  children: ReactNode;
  value: string;
  className?: string;
  animationDuration?: number;
  animationEase?: string;
}

// Abre e fecha só com CSS (grid-rows), sem GSAP no pacote da página.
const AccordionContent: FC<AccordionContentProps> = ({ children, value, className, animationDuration = 0.3 }) => {
  const { activeItem } = useAccordion();
  const isActive = activeItem === value;

  return (
    <div
      id={`accordion-content-${value}`}
      className={cn('grid transition-[grid-template-rows]', className)}
      role="region"
      aria-labelledby={`accordion-trigger-${value}`}
      aria-hidden={!isActive}
      style={{
        gridTemplateRows: isActive ? '1fr' : '0fr',
        transitionDuration: `${animationDuration}s`,
      }}>
      <div className="overflow-hidden">
        <div className="border-t-stroke-2 dark:border-t-stroke-6 border-t pt-5 pb-5 sm:pt-6 sm:pb-8">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

AccordionContent.displayName = 'AccordionContent';
export default AccordionContent;
