"use client";

import { memo, type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    inactiveZone = 0.1,
    proximity = 64,
    spread = 40,
    className,
    borderWidth = 2,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(0);

    const handleMove = useCallback(
      (e?: MouseEvent) => {
        if (!containerRef.current || disabled) return;

        const element = containerRef.current;
        const { left, top, width, height } = element.getBoundingClientRect();
        const mouseX = e?.clientX ?? 0;
        const mouseY = e?.clientY ?? 0;

        const center = [left + width * 0.5, top + height * 0.5];
        const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

        if (distanceFromCenter < inactiveRadius) {
          setOpacity(0);
          return;
        }

        const isActive =
          mouseX > left - proximity &&
          mouseX < left + width + proximity &&
          mouseY > top - proximity &&
          mouseY < top + height + proximity;

        setOpacity(isActive ? 1 : 0);

        if (!isActive) return;

        const targetAngle = (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
        element.style.setProperty("--start", `${targetAngle}deg`);
      },
      [disabled, inactiveZone, proximity]
    );

    useEffect(() => {
      if (disabled) return;
      const handlePointerMove = (e: PointerEvent) => handleMove(e as unknown as MouseEvent);
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [handleMove, disabled]);

    return (
      <div
        ref={containerRef}
        className={cn(
          "absolute inset-0 pointer-events-none transition-opacity duration-300 rounded-[inherit]",
          className
        )}
        style={{
          opacity: opacity,
          "--spread": `${spread}deg`,
          "--glow-color": "#10b981",
          WebkitMaskImage: ` transparent, white var(--spread), transparent calc(var(--spread) * 2))`,
        } as CSSProperties & { "--spread": string; "--glow-color": string }}
      >
        <div 
          className="absolute inset-0 rounded-[inherit]"
          style={{
            border: `${borderWidth}px solid transparent`,
            // BACKGROUND TRICK: Usiamo due gradienti. Uno per coprire l'interno (nero) e uno per il bordo (il glow verde)
            backgroundImage: `linear-gradient(black, black), conic-gradient(from var(--start), transparent, var(--glow-color) var(--spread), transparent calc(var(--spread) * 2))`,
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
