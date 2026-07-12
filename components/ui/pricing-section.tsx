"use client";

import React, { useState } from "react";

type PricingPlan = {
  id: string;
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  isFeatured?: boolean;
};

type PricingSectionProps = {
  data: {
    title: string;
    subtitle: string;
    plans: PricingPlan[];
  };
};

const CheckIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className="h-3.5 w-3.5 shrink-0"
  >
    <path d="m4.5 10.5 3.4 3.4 7.6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PricingTier = ({
  plan,
  annual,
}: {
  plan: PricingPlan;
  annual: boolean;
}) => {
  const { name, monthlyPrice, annualPrice, description, features, buttonText, buttonLink, isFeatured = false } = plan;

  const cardClasses = isFeatured
    ? "border-emerald-400/70 bg-slate-950 text-white shadow-[0_30px_80px_rgba(5,150,105,0.28)] md:-translate-y-5 hover:shadow-[0_36px_90px_rgba(5,150,105,0.36)]"
    : "border-slate-200/80 bg-gradient-to-b from-white to-emerald-50/50 text-slate-900 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:border-emerald-200 hover:shadow-[0_28px_70px_rgba(5,150,105,0.16)]";

  const buttonClasses = isFeatured
    ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
    : "bg-slate-950 text-white hover:bg-emerald-600";

  return (
    <article
      className={`${cardClasses} relative flex w-full max-w-sm flex-col overflow-hidden rounded-[1.75rem] border p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8`}
    >
      {/* Bagliore interno della card in evidenza */}
      {isFeatured && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.22),transparent_55%)]" />
      )}

      <div className="relative flex items-center justify-between gap-3">
        <p className={`text-sm font-black uppercase tracking-[0.2em] ${isFeatured ? "text-emerald-300" : "text-emerald-600"}`}>
          {name}
        </p>
        {isFeatured && (
          <span className="rounded-full bg-emerald-400 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-950 shadow-[0_6px_18px_rgba(16,185,129,0.45)]">
            Più scelto
          </span>
        )}
      </div>
      <div className="relative mt-7 flex items-end gap-2.5">
        <span className="text-[3.4rem] font-black leading-none tracking-[-0.04em]">{annual ? annualPrice : monthlyPrice}</span>
        <span className={`pb-1.5 text-sm font-semibold ${isFeatured ? "text-slate-300" : "text-slate-500"}`}>
          / mese
        </span>
        {annual && (
          <span className="pb-1.5 text-base font-bold text-slate-400 line-through decoration-emerald-500/70 decoration-2">
            {monthlyPrice}
          </span>
        )}
      </div>
      <p className={`mt-2 min-h-5 text-xs font-semibold ${isFeatured ? "text-emerald-300" : "text-emerald-600"}`}>
        {annual ? "Per 12 mesi, con fatturazione annuale" : " "}
      </p>
      <p className={`mt-3 min-h-12 text-sm leading-relaxed ${isFeatured ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>

      <div className={`my-7 h-px ${isFeatured ? "bg-gradient-to-r from-emerald-400/40 via-white/10 to-transparent" : "bg-gradient-to-r from-emerald-200 via-slate-200 to-transparent"}`} />

      <ul className="relative flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-semibold leading-6">
            <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${isFeatured ? "bg-emerald-400/15 text-emerald-300" : "bg-emerald-100 text-emerald-700"}`}>
              <CheckIcon />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        className={`${buttonClasses} relative mt-9 w-full rounded-full px-6 py-3.5 text-center text-sm font-black transition-all duration-300 hover:scale-[1.02]`}
      >
        {buttonText}
      </a>
    </article>
  );
};

export const PricingSection = ({ data }: PricingSectionProps) => {
  const [annual, setAnnual] = useState(false);

  const toggleOption = (label: string, isAnnual: boolean, badge?: string) => (
    <button
      type="button"
      onClick={() => setAnnual(isAnnual)}
      aria-pressed={annual === isAnnual}
      className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
        annual === isAnnual ? "bg-slate-950 text-white shadow" : "text-slate-600 hover:text-emerald-700"
      }`}
    >
      {label}
      {badge && (
        <span
          className={`rounded-full px-2 py-0.5 text-[0.65rem] font-black uppercase tracking-wide transition-colors ${
            annual === isAnnual ? "bg-emerald-400 text-slate-950" : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {badge}
        </span>
      )}
    </button>
  );

  return (
    <section className="relative z-30 w-full overflow-hidden bg-emerald-50/60 px-5 py-20 sm:px-8 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* L'ancora sta sul titolo con margine pari alla navbar fixed: cliccando
            "Piani" si atterra col titolo in alto e le card subito visibili. */}
        <div id="pricing" className="mx-auto mb-10 max-w-3xl scroll-mt-28 text-center sm:scroll-mt-36 md:mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">
            Piani Statera
          </p>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-6xl">
            {data.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            {data.subtitle}
          </p>
        </div>

        <div className="mb-12 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-emerald-200 bg-white p-1.5 shadow-[0_10px_30px_rgba(5,150,105,0.1)]">
            {toggleOption("Mensile", false)}
            {toggleOption("Annuale", true, "fino a -38%")}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
          {data.plans.map((plan) => (
            <PricingTier key={plan.id} plan={plan} annual={annual} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Prezzi IVA esclusa. Puoi cambiare piano in qualsiasi momento.
        </p>
      </div>
    </section>
  );
};
