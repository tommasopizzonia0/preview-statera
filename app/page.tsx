import Link from "next/link";
import { Activity, Apple, Calculator, CalendarDays, FileText, UsersRound, type LucideIcon } from "lucide-react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { PricingSection } from "@/components/ui/pricing-section";
import { Footer } from "@/components/ui/footer";

const capabilities = [
  {
    number: "01",
    icon: UsersRound,
    eyebrow: "Clienti",
    title: "Ogni percorso, sempre leggibile.",
    description:
      "Anagrafica, storico, documenti, appuntamenti e attività recenti restano raccolti in un unico fascicolo.",
    accent: "from-emerald-50 to-white",
  },
  {
    number: "02",
    icon: Apple,
    eyebrow: "Piani alimentari",
    title: "Costruisci con precisione, senza perdere ritmo.",
    description:
      "Organizza pasti, alimenti, ricette, alternative e schede riutilizzabili in un flusso pensato per il lavoro quotidiano.",
    accent: "from-teal-50 to-white",
  },
  {
    number: "03",
    icon: Activity,
    eyebrow: "Monitoraggio",
    title: "I progressi diventano chiari.",
    description:
      "Misurazioni, plicometria, composizione corporea e andamento nel tempo aiutano a raccontare il percorso con dati comprensibili.",
    accent: "from-cyan-50 to-white",
  },
  {
    number: "04",
    icon: CalendarDays,
    eyebrow: "Studio",
    title: "Agenda e priorità nello stesso spazio.",
    description:
      "Appuntamenti, promemoria, attività recenti e azioni rapide tengono la giornata ordinata fin dal primo accesso.",
    accent: "from-lime-50 to-white",
  },
  {
    number: "05",
    icon: Calculator,
    eyebrow: "Analisi nutrizionale",
    title: "Dal fabbisogno al piano, con continuità.",
    description:
      "TDEE, obiettivi, macro, micronutrienti e confronto tra alimenti accompagnano le decisioni senza frammentare il lavoro.",
    accent: "from-amber-50 to-white",
  },
  {
    number: "06",
    icon: FileText,
    eyebrow: "Consegna",
    title: "Un risultato professionale anche fuori dallo studio.",
    description:
      "Report e documenti personalizzati danno continuità all’esperienza e valorizzano l’identità del professionista.",
    accent: "from-rose-50 to-white",
  },
];

const workflow = [
  {
    step: "01",
    title: "Accogli",
    text: "Apri il fascicolo e ritrova subito il contesto del cliente.",
  },
  {
    step: "02",
    title: "Valuta",
    text: "Raccogli misure, definisci gli obiettivi e osserva l’andamento.",
  },
  {
    step: "03",
    title: "Costruisci",
    text: "Crea il piano con strumenti nutrizionali integrati e basi riutilizzabili.",
  },
  {
    step: "04",
    title: "Segui",
    text: "Mantieni appuntamenti, documenti e follow-up nello stesso percorso.",
  },
];

const pricingData = {
  title: "Il piano giusto per il tuo modo di lavorare.",
  subtitle:
    "Inizia con gli strumenti essenziali e scegli più spazio operativo quando il tuo studio cresce.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "€19",
      frequency: "/ mese",
      description: "Per iniziare con ordine, senza complicazioni.",
      features: [
        "Gestione clienti e fascicoli",
        "Schede alimentari e misurazioni",
        "Report PDF di base",
        "Fino a 30 clienti",
      ],
      buttonText: "Inizia ora",
      buttonLink: "/contatti",
    },
    {
      id: "pro",
      name: "Pro",
      price: "€39",
      frequency: "/ mese",
      description: "Per il professionista che vuole un flusso completo.",
      features: [
        "Tutto di Starter",
        "Agenda, promemoria e strumenti clinici",
        "Calcoli TDEE, macro e micronutrienti",
        "Report multi-sessione illimitati",
      ],
      buttonText: "Richiedi una demo",
      buttonLink: "/contatti",
      isFeatured: true,
    },
    {
      id: "studio",
      name: "Studio",
      price: "€79",
      frequency: "/ mese",
      description: "Per studi e team che lavorano insieme.",
      features: [
        "Tutto di Pro",
        "Multi-utente con ruoli e permessi",
        "Branding avanzato",
        "Supporto prioritario",
      ],
      buttonText: "Parla con noi",
      buttonLink: "/contatti",
    },
  ],
};

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

export default function Home() {
  return (
    <div className="statera-page-background min-h-screen overflow-clip text-slate-950">
      <section className="relative isolate px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12 lg:pt-14">
        <div aria-hidden="true" className="hero-orb hero-orb-left" />
        <div aria-hidden="true" className="hero-orb hero-orb-right" />

        <div className="relative z-30 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="reveal-up reveal-delay-1 text-balance text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]">
              Più tempo per le persone.
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text pb-2 text-transparent">
                Più controllo sullo studio.
              </span>
            </h1>

            <p className="reveal-up reveal-delay-2 mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              Statera riunisce clienti, misurazioni, piani alimentari, agenda e report in un’esperienza ordinata, professionale e costruita intorno al tuo lavoro.
            </p>

            <div className="reveal-up reveal-delay-3 mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contatti" className="cta-primary group">
                Richiedi una demo
                <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowIcon /></span>
              </Link>
              <a href="#funzionalita" className="cta-secondary">
                Esplora le funzionalità
              </a>
            </div>

            <div className="reveal-up reveal-delay-3 mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
              {["Percorso cliente connesso", "Strumenti clinici integrati", "Esperienza semplice e veloce"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Anteprima del prodotto" className="relative z-30 border-y border-emerald-100/80 bg-white/80">
        <MacbookScroll
          src="/statera-dashboard.png"
          showGradient={false}
          title={
            <span className="block text-balance font-black tracking-[-0.035em] text-slate-950">
              Il tuo studio, <span className="text-emerald-600">a colpo d’occhio.</span>
            </span>
          }
          badge={<div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow">STATERA</div>}
        />
      </section>

      <section id="funzionalita" className="relative z-40 scroll-mt-24 bg-white/65 px-5 py-20 backdrop-blur-[1px] sm:px-8 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Un unico ambiente</p>
              <h2 className="section-title mt-4">Tutto ciò che ti serve. Niente che spezzi il flusso.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Ogni funzione nasce per accompagnare un momento reale della pratica professionale: dalla prima visita alla consegna del piano, fino al controllo successivo.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon as LucideIcon;
              return (
                <article key={item.number} className={`feature-card group bg-gradient-to-br ${item.accent}`}>
                  <span aria-hidden="true" className="feature-card-orb" />
                  <div className="relative flex items-start justify-between">
                    <span className="feature-card-icon">
                      <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.8} />
                    </span>
                    <span className="feature-card-number">{item.number}</span>
                  </div>
                  <div className="relative mt-8">
                    <span className="section-kicker">{item.eyebrow}</span>
                    <h3 className="mt-3 text-2xl font-black leading-[1.08] tracking-[-0.025em] text-slate-950">{item.title}</h3>
                    <p className="mt-4 text-[0.95rem] leading-7 text-slate-600">{item.description}</p>
                  </div>
                  <span aria-hidden="true" className="feature-card-line" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="come-funziona" className="relative z-40 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">Un flusso naturale</p>
            <h2 className="section-title section-title-light mt-4" style={{ color: "#ffffff" }}>Dalla visita al follow-up, senza cambiare linguaggio.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Statera segue la sequenza del tuo lavoro e mantiene ogni informazione nel punto in cui serve davvero.
            </p>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <li key={item.step} className="workflow-card">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-emerald-300">{item.step}</span>
                <h3 className="mt-12 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-30 px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-[0_30px_90px_rgba(5,150,105,0.1)] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-14">
          <div>
            <p className="section-kicker">Pensato per la pratica</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-5xl">La tecnologia resta sullo sfondo. Tu resti al centro.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Un’interfaccia chiara riduce i passaggi inutili e lascia più spazio alla relazione, al ragionamento e alla qualità del servizio.
            </p>
            <Link href="/contatti" className="mt-8 inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800">
              Scopri Statera con una demo <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Più continuità", "Dati e attività seguono lo stesso percorso."],
              ["Meno ripetizioni", "Template e strumenti riutilizzabili accelerano il lavoro."],
              ["Più chiarezza", "Dashboard e storico rendono visibili le priorità."],
              ["Più identità", "Documenti e comunicazione valorizzano il tuo studio."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <span className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700"><CheckIcon /></span>
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection data={pricingData} />

      <section className="relative z-30 px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.32),transparent_55%)]" />
          <div className="relative mx-auto max-w-3xl">
            <p className="section-kicker text-emerald-300">Il prossimo passo</p>
            <h2 className="mt-5 text-balance text-3xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">Metti il tuo studio in equilibrio.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Raccontaci come lavori e scopri come Statera può accompagnare il tuo metodo ogni giorno.
            </p>
            <Link href="/contatti" className="cta-primary mt-9 bg-emerald-400 text-slate-950 hover:bg-emerald-300">
              Richiedi una demo <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
