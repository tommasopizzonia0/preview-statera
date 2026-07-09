"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-0 flex w-full flex-col items-center justify-center overflow-hidden bg-slate-950 px-0 py-20 md:min-h-[760px] md:py-0",
        className
      )}
    >
      {/* Variante mobile statica: nessun filtro o livello animato durante lo scroll. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.72) 0%, rgba(5,150,105,0.28) 38%, transparent 72%)",
        }}
      >
        <div className="absolute left-[6%] right-[6%] top-[102px] h-px bg-emerald-300" />
      </div>

      <div className="relative isolate z-0 hidden w-full flex-1 scale-y-125 items-center justify-center md:flex">
        <motion.div
          initial={{ opacity: 0.45, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.65,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] origin-right overflow-visible bg-gradient-conic from-emerald-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top] [will-change:transform,opacity]"
        >
          <div className="absolute  w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.45, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.65,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] origin-left bg-gradient-conic from-transparent via-transparent to-emerald-500 text-white [--conic-position:from_290deg_at_center_top] [will-change:transform,opacity]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-gradient-to-b from-slate-950/80 to-slate-950"></div>
        <div className="absolute inset-auto z-50 h-24 w-[20rem] -translate-y-1/2 rounded-full bg-emerald-500/35 blur-2xl md:h-28 md:w-[26rem]"></div>
        <motion.div
          initial={{ opacity: 0.6, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.65,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 w-64 -translate-y-[6rem] rounded-full bg-emerald-400/90 blur-xl [will-change:transform,opacity] md:h-28"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0.65, scaleX: 0.5 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.65,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[min(30rem,88vw)] -translate-y-[7rem] bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.65)] [will-change:transform,opacity]"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 pt-14 md:-translate-y-72 md:pt-0">
        {children}
      </div>
    </div>
  );
};
