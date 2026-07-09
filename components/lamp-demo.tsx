"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";

export function StateraLampSection() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.4, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          delay: 0.15,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="flex w-full max-w-4xl flex-col items-center text-center"
      >
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-emerald-300 sm:text-sm">
          Il tuo studio, più avanti
        </p>
        <h2 className="bg-gradient-to-b from-white via-emerald-50 to-emerald-300 bg-clip-text text-4xl font-black leading-[1.08] tracking-tight text-transparent sm:text-5xl md:text-7xl">
          Più tempo per le persone.
          <br />
          Più precisione nel lavoro.
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-7 sm:text-lg">
          Statera riunisce dati, strumenti clinici e relazione con il paziente
          in un&apos;unica esperienza semplice e professionale.
        </p>
        <Link
          href="/contatti"
          className="mt-8 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_35px_rgba(52,211,153,0.25)] transition duration-300 hover:scale-105 hover:bg-emerald-300 sm:mt-9"
        >
          Scopri Statera
        </Link>
      </motion.div>
    </LampContainer>
  );
}
