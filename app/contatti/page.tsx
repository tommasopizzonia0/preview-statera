"use client";

import { useRef } from "react";
import Link from "next/link";
import { Activity, Apple, Leaf, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/stateful-button";
import { Footer } from "@/components/ui/footer";
import { getConsent, trackLead } from "@/lib/meta-pixel";

const ArrowIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
    <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
    <path d="m4.5 10.5 3.4 3.4 7.6-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const reasonIcons: Record<string, LucideIcon> = {
  demo: Apple,
  info: UtensilsCrossed,
  support: Activity,
  other: Leaf,
};

const ReasonIcon = ({ type }: { type: string }) => {
  const Icon = reasonIcons[type] ?? Leaf;
  return <Icon aria-hidden="true" strokeWidth={1.8} className="h-6 w-6" />;
};

const reasons = [
  { value: "demo", title: "Partecipare alla beta", text: "Prova Statera in anteprima sul tuo flusso di lavoro", badge: "Consigliato" },
  { value: "info", title: "Ricevere informazioni", text: "Piani, funzionalità e modalità di utilizzo" },
  { value: "support", title: "Richiedere supporto", text: "Ricevi assistenza dal nostro team" },
  { value: "other", title: "Parlare con noi", text: "Per partnership o qualsiasi altra richiesta" },
];

const betaSteps = [
  ["01", "Il tuo metodo", "Partiamo da come lavori oggi."],
  ["02", "Accesso in anteprima", "Ti attiviamo l’accesso alla beta di Statera."],
  ["03", "Il tuo feedback", "Ci racconti cosa funziona e cosa migliorare."],
];

const fieldClassName = "min-h-14 w-full rounded-2xl border-2 border-slate-300 bg-white px-4 text-base text-slate-950 shadow-[0_1px_2px_rgba(15,23,42,0.04)] outline-none transition-[border-color,box-shadow,background-color] placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10";
const labelClassName = "pl-1 text-sm font-extrabold text-slate-700";

export default function ContattiPage() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendRequest = async () => {
    const form = formRef.current;
    if (!form || !form.reportValidity()) throw new Error("Compila tutti i campi obbligatori.");

    // Con il consenso marketing, lo stesso eventId viene inviato sia dal browser
    // (fbq) sia dal server (Conversions API): Meta deduplica e conta un solo Lead.
    const eventId = getConsent() === "granted" ? crypto.randomUUID() : undefined;

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), ...(eventId ? { eventId } : {}) }),
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error ?? "Invio non riuscito.");
    if (eventId) trackLead(eventId);
    form.reset();
  };

  return (
    // La navbar è fixed (non occupa spazio): il pt del main compensa la sua altezza.
    <div className="min-h-screen bg-white text-slate-950">
      <main className="contact-page relative isolate overflow-hidden px-5 pb-10 pt-34 sm:px-8 sm:pb-16 sm:pt-48 lg:pb-20 lg:pt-52">
        <div aria-hidden="true" className="absolute -left-48 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-200/40 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-56 bottom-10 -z-10 h-[38rem] w-[38rem] rounded-full bg-teal-100/60 blur-3xl" />

        <div className="relative z-30 mx-auto max-w-7xl">
          <Link href="/" aria-label="Torna alla home" title="Torna alla home" className="group absolute right-0 top-0 z-20 grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md">
            <span className="rotate-180 transition-transform group-hover:-translate-x-0.5"><ArrowIcon /></span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-20">
            <section className="pr-14 lg:sticky lg:top-28 lg:self-start lg:pr-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Conosciamoci
              </div>
              <h1 className="mt-6 text-balance text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-[4.25rem]">
                Il prossimo passo per il tuo
                <span className="block text-emerald-600">studio in equilibrio.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Raccontaci come lavori. Ti mostreremo Statera attraverso le attività che fanno davvero parte della tua giornata.
              </p>

              <div className="mt-9 overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_24px_60px_rgba(2,6,23,0.18)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Come funziona la beta</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-300">Senza impegno</span>
                </div>
                <ol className="mt-7 space-y-5">
                  {betaSteps.map(([number, title, text]) => (
                    <li key={number} className="grid grid-cols-[2.25rem_1fr] gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/10 font-mono text-xs font-black text-emerald-300">{number}</span>
                      <div>
                        <h2 className="font-black">{title}</h2>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <a href="mailto:stateranutrition.info@gmail.com" className="group mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm transition hover:border-emerald-200 hover:bg-white">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><MailIcon /></span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-400">Oppure scrivici</span>
                  <span className="mt-0.5 block truncate text-sm font-extrabold text-slate-800 group-hover:text-emerald-700">stateranutrition.info@gmail.com</span>
                </span>
              </a>
            </section>

            <section aria-labelledby="contact-form-title" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_28px_80px_rgba(15,23,42,0.1)] sm:p-8 lg:p-10">
              <div className="border-b border-slate-100 pb-7">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Parliamo del tuo studio</p>
                <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <h2 id="contact-form-title" className="text-3xl font-black tracking-[-0.035em]">Inizia da qui.</h2>
                  <p className="text-xs font-semibold text-slate-400"><span className="text-emerald-600">*</span> Campi obbligatori</p>
                </div>
              </div>

              <form ref={formRef} className="mt-7 space-y-7" onSubmit={(event) => event.preventDefault()}>
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Sito web</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>

                <fieldset>
                  <legend className={labelClassName}>Di cosa vuoi parlare?</legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {reasons.map((reason, index) => (
                      <div key={reason.value} className="relative">
                        <input className="peer sr-only" type="radio" id={`reason-${reason.value}`} name="subject" value={reason.value} defaultChecked={index === 0} />
                        <label htmlFor={`reason-${reason.value}`} className="group relative block min-h-[9rem] cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white to-slate-50 p-4.5 transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_18px_38px_rgba(15,23,42,0.1)] peer-checked:border-emerald-400 peer-checked:from-emerald-50 peer-checked:via-white peer-checked:to-teal-50 peer-checked:shadow-[0_14px_34px_rgba(5,150,105,0.14)] peer-checked:[&_.reason-accent]:scale-x-100 peer-checked:[&_.reason-check]:scale-100 peer-checked:[&_.reason-check]:opacity-100 peer-checked:[&_.reason-icon]:border-emerald-200 peer-checked:[&_.reason-icon]:from-emerald-500 peer-checked:[&_.reason-icon]:to-teal-500 peer-checked:[&_.reason-icon]:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-emerald-500/15">
                          <span aria-hidden="true" className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-100/0 to-teal-100/0 blur-2xl transition-colors group-hover:from-emerald-100/70 group-hover:to-teal-100/50" />
                          <span aria-hidden="true" className="reason-accent absolute inset-x-6 bottom-0 h-1 origin-center scale-x-0 rounded-t-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-transform duration-300" />
                          <span className="relative flex h-full flex-col">
                            <span className="flex items-start justify-between gap-3">
                              <span className="reason-icon grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_16px_rgba(5,150,105,0.08)] transition-colors">
                                <ReasonIcon type={reason.value} />
                              </span>
                              <span className="reason-check grid h-7 w-7 scale-75 place-items-center rounded-full bg-emerald-500 text-white opacity-0 shadow-[0_5px_12px_rgba(5,150,105,0.3)] transition-[opacity,transform]">
                                <CheckIcon />
                              </span>
                            </span>
                            <span className="mt-4 flex flex-wrap items-center gap-2">
                              <span className="block text-sm font-black text-slate-950">{reason.title}</span>
                              {reason.badge && <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[0.56rem] font-black uppercase tracking-wider text-emerald-700">{reason.badge}</span>}
                            </span>
                            <span className="mt-1 block text-xs leading-5 text-slate-500">{reason.text}</span>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="name" className={labelClassName}>Nome e cognome <span className="text-emerald-600">*</span></label>
                    <input id="name" name="name" type="text" required autoComplete="name" placeholder="Mario Rossi" className={fieldClassName} />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className={labelClassName}>Email professionale <span className="text-emerald-600">*</span></label>
                    <input id="email" name="email" type="email" required autoComplete="email" inputMode="email" placeholder="mario@studio.it" className={fieldClassName} />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="message" className={labelClassName}>Raccontaci qualcosa del tuo studio <span className="font-medium text-slate-400">(facoltativo)</span></label>
                  <textarea id="message" name="message" rows={5} maxLength={3000} placeholder="Quanti clienti segui? Quali attività vorresti rendere più semplici?" className={`${fieldClassName} min-h-36 resize-y py-4 leading-7`} />
                </div>

                <div className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-600">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon /></span>
                  <p>
                    I dati saranno utilizzati per rispondere alla tua richiesta, come descritto nella{" "}
                    <Link href="/privacy" className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800">Privacy Policy</Link>.
                  </p>
                </div>

                <Button type="button" onClick={handleSendRequest} className="min-h-14 w-full rounded-full bg-slate-950 px-6 text-base font-black text-white shadow-[0_14px_32px_rgba(2,6,23,0.16)] transition-colors hover:bg-emerald-700 disabled:opacity-80">
                  Invia la richiesta <ArrowIcon />
                </Button>
                <p className="text-center text-xs text-slate-400">Risponderà direttamente il team Statera.</p>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
