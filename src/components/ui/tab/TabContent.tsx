'use client';

import { cn } from '@/utils/cn';
import { useEffect, useRef } from 'react';
import { useTab } from '../../../context/TabContext';

interface TabContentProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  display?: 'flex' | 'block' | 'grid' | 'inline-block';
}

const TabContent: React.FC<TabContentProps> = ({ children, index, className = '', display = 'flex' }) => {
  const { currentIndex, registerTabContent } = useTab();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register this specific content element with the tab context
    const element = contentRef.current;
    registerTabContent(index, element);

    // Cleanup on unmount
    return () => {
      registerTabContent(index, null);
    };
  }, [registerTabContent, index]);

  const isActive = currentIndex === index;

  return (
    <div
      ref={contentRef}
      id={`tab-content-${index}`}
      role="tabpanel"
      aria-labelledby={`tab-${index}`}
      aria-hidden={!isActive}
      className={cn('tab-content', className, !isActive && 'hidden')}
      style={{ display: isActive ? display : 'none' }}>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';
export default TabContent;
