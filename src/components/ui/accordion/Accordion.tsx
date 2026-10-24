'use client';

import { cn } from '@/utils/cn';
import React, { createContext, useContext, useState } from 'react';

// Accordion Context Types
export interface AccordionContextType {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  allowMultiple: boolean;
  disabled: boolean;
}

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
  allowMultiple?: boolean;
  disabled?: boolean;
  // Mantidos por compatibilidade: os itens já aparecem visíveis, sem animação de entrada no scroll.
  enableScrollAnimation?: boolean;
  animationDelay?: number;
}

// Create Accordion Context
const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

// Hook to use Accordion Context
export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error('useAccordion must be used within an Accordion component');
  }
  return context;
};

const Accordion: React.FC<AccordionProps> = ({
  children,
  className,
  defaultValue,
  allowMultiple = false,
  disabled = false,
}) => {
  const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);

  const handleItemToggle = (itemValue: string | null) => {
    if (disabled) {
      return;
    }

    setActiveItem(activeItem === itemValue ? null : itemValue);
  };

  return (
    <AccordionContext.Provider
      value={{
        activeItem,
        setActiveItem: handleItemToggle,
        allowMultiple,
        disabled,
      }}>
      <div className={cn(className)} role="region" aria-label="Accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

Accordion.displayName = 'Accordion';

export default Accordion;
