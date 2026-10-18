'use client';
import { cn } from '@/utils/cn';
import Springer from '@/utils/springer';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactElement, Ref, cloneElement, useRef } from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const REACT_LAZY_TYPE = Symbol.for('react.lazy');

type LazyNode = { $$typeof: symbol; _payload: unknown; _init: (payload: unknown) => unknown };

// Filhos vindos de Server Components podem chegar como elementos "lazy" (React 19.3+);
// sem resolver, isValidElement falha e o conteúdo some na hidratação.
const resolveLazy = <T,>(node: T): T => {
  let current: unknown = node;
  while (current && typeof current === 'object' && (current as LazyNode).$$typeof === REACT_LAZY_TYPE) {
    const lazy = current as LazyNode;
    current = lazy._init(lazy._payload);
  }
  return current as T;
};

interface RevealAnimationProps {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    'data-ns-animate'?: boolean;
  }>;
  duration?: number;
  delay?: number;
  offset?: number;
  instant?: boolean;
  start?: string;
  end?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  useSpring?: boolean;
  rotation?: number;
  animationType?: 'from' | 'to';
  className?: string;
}

const RevealAnimation = ({
  children,
  duration = 0.6,
  delay = 0,
  offset = 60,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
  direction = 'down',
  useSpring = false,
  rotation = 0,
  animationType = 'from',
  className = '',
}: RevealAnimationProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const element = elementRef.current;
    if (!element) {
      return;
    }

    // Get spring easing if useSpring is true
    const spring = useSpring ? Springer.default(0.2, 0.8) : null;

    // Force initial state
    element.style.opacity = '1';
    element.style.filter = 'blur(0)';

    // Set animation properties based on animation type
    let animationProps: gsap.TweenVars;

    if (animationType === 'to') {
      // gsap.to() - animate TO the specified values
      animationProps = {
        opacity: 1,
        filter: 'blur(0)',
        duration: duration,
        delay: delay,
        ease: useSpring && spring ? spring : 'power2.out',
      };

      // Add rotation if specified
      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    } else {
      // gsap.from() - animate FROM the specified values to normal
      animationProps = {
        opacity: 0,
        filter: 'blur(16px)',
        duration: duration,
        delay: delay,
        ease: useSpring && spring ? spring : 'power2.out',
      };

      // Add rotation if specified
      if (rotation !== 0) {
        animationProps.rotation = rotation;
      }
    }

    // Add ScrollTrigger if not instant
    if (!instant) {
      animationProps.scrollTrigger = {
        trigger: element,
        start: start,
        end: end,
        scrub: false,
      };
    }

    // Set animation direction based on direction prop
    switch (direction) {
      case 'left':
        animationProps.x = animationType === 'from' ? -offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { x: -offset });
        }
        break;
      case 'right':
        animationProps.x = animationType === 'from' ? offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { x: offset });
        }
        break;
      case 'down':
        animationProps.y = animationType === 'from' ? offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { y: offset });
        }
        break;
      case 'up':
      default:
        animationProps.y = animationType === 'from' ? -offset : 0;
        if (animationType === 'to') {
          gsap.set(element, { y: -offset });
        }
        break;
    }

    // Use appropriate GSAP method based on animation type
    if (animationType === 'to') {
      gsap.to(element, animationProps);
    } else {
      gsap.from(element, animationProps);
    }
  }, [duration, delay, offset, instant, start, end, direction, useSpring, rotation, animationType]);

  const child = resolveLazy(children);

  // Early return if children is not valid (after all hooks)
  if (!child || !React.isValidElement(child)) {
    return null;
  }

  // Clone the child element and add the ref, className, and data-ns-animate attribute
  return cloneElement(child, {
    ref: elementRef,
    className: cn(child?.props?.className, className),
    'data-ns-animate': true,
  });
};

export default RevealAnimation;
