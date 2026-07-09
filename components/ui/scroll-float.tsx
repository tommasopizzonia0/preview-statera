"use client";

import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registriamo il plugin di GSAP per lo scroll
gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Divide il testo in singoli caratteri se è una stringa
  const characters = useMemo(() => {
    if (typeof children === 'string') {
      return children.split('').map((char, index) => (
        <span key={index} className={`inline-block ${textClassName}`} style={{ opacity: 0 }}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      ));
    }
    return children;
  }, [children, textClassName]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Seleziona tutti i caratteri generati
    const chars = el.querySelectorAll('span.inline-block');
    if (chars.length === 0) return;

    const scroller = scrollContainerRef?.current || window;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 40,
          rotationX: -45,
          transformOrigin: '50% 100%',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: animationDuration,
          ease: ease,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller: scroller,
            start: scrollStart,
            end: scrollEnd,
            // toggleActions: "play none none reverse" farà ripartire l'animazione se torni su, 
            // ma se vuoi che accada una volta sola usa "play none none none"
            toggleActions: 'play none none reverse', 
          },
        }
      );
    }, el);

    return () => ctx.revert(); // Cleanup di GSAP quando il componente viene smontato
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger, scrollContainerRef]);

  return (
    <div 
      ref={containerRef} 
      className={`overflow-hidden [perspective:800px] ${containerClassName}`}
    >
      {characters}
    </div>
  );
};

export default ScrollFloat;