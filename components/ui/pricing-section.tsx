import React from "react";

type PricingPlan = {
  id: string;
  name: string;
  price: string;
  frequency: string;
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
    fill="currentColor"
    className="h-5 w-5 shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4Z"
      clipRule="evenodd"
    />
  </svg>
);

const PricingTier = ({
  name,
  price,
  frequency,
  description,
  features,
  buttonText,
  buttonLink,
  isFeatured = false,
}: PricingPlan) => {
  const cardClasses = isFeatured
    ? "relative bg-slate-950 text-white border-emerald-400 shadow-[0_24px_70px_rgba(5,150,105,0.24)] md:-translate-y-4"
    : "bg-white text-slate-900 border-slate-200 shadow-[0_16px_50px_rgba(15,23,42,0.08)]";

  const buttonClasses = isFeatured
    ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
    : "bg-slate-950 text-white hover:bg-emerald-600";

  return (
    <article
      className={`${cardClasses} flex w-full max-w-sm flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(5,150,105,0.18)] sm:p-8`}
    >
      {isFeatured && (
        <span className="absolute right-6 top-6 rounded-full bg-emerald-400 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-slate-950">
          Più scelto
        </span>
      )}

      <p className={`text-sm font-bold uppercase tracking-[0.2em] ${isFeatured ? "text-emerald-300" : "text-emerald-600"}`}>
        {name}
      </p>
      <div className="mt-7 flex items-end gap-2">
        <span className="text-5xl font-black tracking-tight">{price}</span>
        <span className={`pb-1 text-sm font-medium ${isFeatured ? "text-slate-300" : "text-slate-500"}`}>
          {frequency}
        </span>
      </div>
      <p className={`mt-5 min-h-12 text-sm leading-relaxed ${isFeatured ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>

      <div className={`my-7 h-px ${isFeatured ? "bg-white/15" : "bg-slate-200"}`} />

      <ul className="flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm leading-6">
            <span className={isFeatured ? "text-emerald-300" : "text-emerald-600"}>
              <CheckIcon />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={buttonLink}
        className={`${buttonClasses} mt-9 w-full rounded-full px-6 py-3.5 text-center text-sm font-bold transition-all duration-300 hover:scale-[1.02]`}
      >
        {buttonText}
      </a>
    </article>
  );
};

export const PricingSection = ({ data }: PricingSectionProps) => (
  <section className="relative z-30 w-full overflow-hidden bg-emerald-50/60 px-5 py-20 sm:px-8 md:py-36">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
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

      {/* L'ancora sta sulle card (non sulla sezione) così il link "Piani" atterra
          con le card in vista invece che sul padding + titolo della sezione. */}
      <div id="pricing" className="flex scroll-mt-24 flex-col items-center justify-center gap-6 md:flex-row md:items-stretch">
        {data.plans.map((plan) => (
          <PricingTier key={plan.id} {...plan} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-slate-500">
        Prezzi IVA esclusa. Puoi cambiare piano in qualsiasi momento.
      </p>
    </div>
  </section>
);
