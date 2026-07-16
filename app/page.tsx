import Link from "next/link";
import { Activity, Apple, Calculator, CalendarDays, FileText, UsersRound, type LucideIcon } from "lucide-react";
import { CanvasText } from "@/components/ui/canvas-text";
import { DemoVideo } from "@/components/ui/demo-video";
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

const documentFlow = [
  {
    step: "01",
    title: "Anteprima in tempo reale",
    text: "Il PDF si apre all’istante in Statera, senza download né applicazioni esterne.",
  },
  {
    step: "02",
    title: "Nel fascicolo, con un click",
    text: "Il documento si archivia nel fascicolo del cliente, pronto quando serve.",
  },
  {
    step: "03",
    title: "Un unico archivio, sempre ordinato",
    text: "Referti, piani e report del cliente restano ordinati nello stesso posto.",
  },
  {
    step: "04",
    title: "Invio istantaneo",
    text: "Un click e il documento arriva al cliente, senza passaggi intermedi.",
  },
  {
    step: "05",
    title: "Ritorni dove eri",
    text: "Completato l’invio torni al profilo del cliente e riprendi da dove eri.",
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
      monthlyPrice: "€19",
      annualPrice: "€14",
      description: "Per iniziare con ordine, senza complicazioni.",
      features: ["Fino a 15 clienti"],
      buttonText: "Inizia ora",
      buttonLink: "/contatti",
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: "€39",
      annualPrice: "€29",
      description: "Per il professionista che vuole un flusso completo.",
      features: ["Fino a 50 clienti", "Supporto prioritario rispetto a Starter"],
      buttonText: "Partecipa alla beta",
      buttonLink: "/contatti",
      isFeatured: true,
    },
    {
      id: "studio",
      name: "Studio",
      monthlyPrice: "€79",
      annualPrice: "€49",
      description: "Per studi e team che lavorano insieme.",
      features: ["Clienti illimitati", "Supporto prioritario rispetto a Pro"],
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
    // La navbar è fixed (non occupa spazio): il pt dell'hero compensa la sua altezza.
    <div className="statera-page-background min-h-screen overflow-clip text-slate-950">
      <section className="relative isolate px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-44 lg:pt-46">
        <div aria-hidden="true" className="hero-orb hero-orb-left" />
        <div aria-hidden="true" className="hero-orb hero-orb-right" />

        <div className="relative z-30 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="reveal-up reveal-delay-1 text-balance text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[5.25rem]">
              Più tempo per le persone.
              {/* Su mobile il gradiente statico: il canvas anima in continuo (costa batteria/fps)
                  e il testo disegnato su canvas non va a capo. */}
              <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text pb-2 text-transparent md:hidden">
                Più controllo sullo studio.
              </span>
              {/* Riga singola: il canvas non va a capo, quindi niente wrap, centrata anche
                  se più larga del contenitore, e font che scala col viewport per non tagliarsi. */}
              {/* tracking-normal: il canvas 2D ignora il letter-spacing CSS, quindi col
                  tracking negativo del titolo la misura DOM risulta più stretta del testo
                  disegnato e le ultime lettere vengono tagliate. */}
              <span className="hidden whitespace-nowrap pb-2 text-[clamp(2.75rem,6vw,5.25rem)] tracking-normal md:flex md:justify-center">
                <CanvasText
                  text="Più controllo sullo studio."
                  backgroundClassName="bg-emerald-600"
                  colors={[
                    "rgba(16, 185, 129, 1)",
                    "rgba(16, 185, 129, 0.9)",
                    "rgba(45, 212, 191, 0.8)",
                    "rgba(16, 185, 129, 0.7)",
                    "rgba(45, 212, 191, 0.6)",
                    "rgba(16, 185, 129, 0.5)",
                    "rgba(45, 212, 191, 0.4)",
                    "rgba(16, 185, 129, 0.3)",
                    "rgba(45, 212, 191, 0.2)",
                    "rgba(16, 185, 129, 0.1)",
                  ]}
                  lineGap={4}
                  animationDuration={20}
                />
              </span>
            </h1>

            <p className="reveal-up reveal-delay-2 mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl">
              Statera riunisce clienti, misurazioni, piani alimentari, agenda e report in un’esperienza ordinata, professionale e costruita intorno al tuo lavoro.
            </p>

            <div className="reveal-up reveal-delay-3 mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/contatti" className="cta-primary group">
                Partecipa alla beta
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

      <section aria-label="Anteprima del prodotto" className="relative z-30">
        {/* Aloni verdi soffusi dietro il MacBook (il clip del contenitore root
            evita che gli offset negativi creino scroll orizzontale). */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-44 top-[22%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.26),transparent_65%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-44 bottom-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.2),transparent_68%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[55%] h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(16,185,129,0.12),transparent_70%)]" />
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

      <section id="documenti" aria-labelledby="documenti-title" className="relative z-40 scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        {/* Aloni soffusi coerenti con la sezione anteprima prodotto */}
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-[12%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.22),transparent_65%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-44 bottom-[10%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.16),transparent_68%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="section-kicker">Documenti senza attrito</p>
              <h2 id="documenti-title" className="section-title mt-4">Dal PDF al cliente, in un unico gesto.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Guarda Statera all’opera: anteprima immediata del documento, archiviazione nel fascicolo e invio al cliente, senza mai uscire dal suo percorso.
            </p>
          </div>

          <div className="mt-14 grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:gap-12">
            {/* Su mobile/tablet prima il video (aggancia subito), poi i passaggi.
                Da xl in su: passaggi a sinistra in colonna alta ESATTAMENTE quanto
                il video (lista assoluta dentro un wrapper che eredita l'altezza
                della riga, definita dal video) e card che si ripartiscono lo spazio. */}
            <div className="order-2 min-w-0 xl:order-1 xl:relative">
              <ol className="space-y-3 xl:absolute xl:inset-0 xl:flex xl:flex-col xl:gap-2.5 xl:space-y-0">
                {documentFlow.map((item) => (
                  <li
                    key={item.step}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-colors duration-300 hover:border-emerald-300 sm:p-6 xl:flex xl:min-h-0 xl:flex-1 xl:flex-col xl:justify-center xl:px-5 xl:py-2.5"
                  >
                    {/* items-baseline: il numero è agganciato alla baseline tipografica
                        del titolo, non a un offset fisso — resta allineato a qualsiasi
                        dimensione di font. */}
                    <div className="flex items-baseline gap-4">
                      <span className="w-7 shrink-0 font-mono text-xs font-black tracking-widest text-emerald-600">
                        {item.step}
                      </span>
                      <div className="min-w-0 border-l border-slate-100 pl-4 transition-colors duration-300 group-hover:border-emerald-200">
                        <h3 className="font-black tracking-[-0.01em] text-slate-950 xl:text-sm">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600 xl:mt-1 xl:line-clamp-2 xl:text-xs xl:leading-[1.15rem]">{item.text}</p>
                      </div>
                    </div>
                    {/* Riga emerald sul fondo, coerente con le altre sezioni */}
                    <span aria-hidden="true" className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative order-1 min-w-0 xl:order-2">
              {/* Bagliore dietro la finestra video */}
              <div aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(ellipse,rgba(16,185,129,0.14),transparent_70%)]" />
              <figure className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_30px_90px_rgba(5,150,105,0.18)] sm:rounded-[2rem]">
                {/* Barra stile finestra applicazione */}
                <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/90 px-4 py-3 sm:px-5">
                  <span aria-hidden="true" className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </span>
                  <span className="ml-2 min-w-0 truncate font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-xs">
                    Statera — Fascicolo cliente
                  </span>
                  <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-wider text-emerald-700">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    Dal vivo
                  </span>
                </div>
                <DemoVideo
                  src="/statera-gestione-documenti.mp4"
                  label="Dimostrazione della gestione documenti in Statera: anteprima del PDF, aggiunta al fascicolo del cliente e invio con un click"
                  className="block h-auto w-full bg-slate-50"
                />
                <figcaption className="sr-only">
                  Flusso documenti in Statera: anteprima PDF in tempo reale, archiviazione nel fascicolo e invio istantaneo al cliente.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="come-funziona" className="relative z-40 scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:px-8 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="section-kicker text-emerald-300">Un flusso naturale</p>
            <h2 className="section-title section-title-light mt-4" style={{ color: "#ffffff" }}>Dalla visita al follow-up, senza cambiare linguaggio.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Statera segue la sequenza del tuo lavoro e mantiene ogni informazione nel punto in cui serve davvero.
            </p>
          </div>

          <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map((item) => (
              <li
                key={item.step}
                className="group relative min-h-56 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)]"
              >
                {/* Numero "fantasma" decorativo sullo sfondo */}
                <span aria-hidden="true" className="pointer-events-none absolute -right-3 -top-7 font-mono text-[6.5rem] font-black leading-none text-white/[0.05] transition-colors duration-300 group-hover:text-emerald-400/10">
                  {item.step}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 font-mono text-xs font-black text-emerald-300">
                  {item.step}
                </span>
                <h3 className="mt-9 text-2xl font-black tracking-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
                {/* Riga emerald che si accende all'hover */}
                <span aria-hidden="true" className="absolute inset-x-7 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative z-30 px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[2rem] border border-emerald-100 bg-emerald-50/70 p-6 shadow-[0_30px_90px_rgba(5,150,105,0.1)] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:p-14">
          {/* Alone decorativo nell'angolo del pannello */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.14),transparent_65%)]" />
          <div>
            <p className="section-kicker">Pensato per la pratica</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] sm:text-5xl">La tecnologia resta sullo sfondo. Tu resti al centro.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Un’interfaccia chiara riduce i passaggi inutili e lascia più spazio alla relazione, al ragionamento e alla qualità del servizio.
            </p>
            <Link href="/contatti" className="group mt-8 inline-flex items-center gap-2 font-bold text-emerald-700 hover:text-emerald-800">
              Scopri Statera in anteprima
              <span className="transition-transform duration-200 group-hover:translate-x-1"><ArrowIcon /></span>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Più continuità", "Dati e attività seguono lo stesso percorso."],
              ["Meno ripetizioni", "Template e strumenti riutilizzabili accelerano il lavoro."],
              ["Più chiarezza", "Dashboard e storico rendono visibili le priorità."],
              ["Più identità", "Documenti e comunicazione valorizzano il tuo studio."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_18px_45px_rgba(5,150,105,0.14)]"
              >
                {/* Bagliore d'angolo che si accende all'hover */}
                <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-100/0 to-teal-100/0 blur-2xl transition-colors duration-300 group-hover:from-emerald-100/80 group-hover:to-teal-100/60" />
                <span className="relative mb-5 grid h-10 w-10 place-items-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_6px_16px_rgba(5,150,105,0.08)] transition-colors duration-300 group-hover:border-emerald-300 group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white">
                  <CheckIcon />
                </span>
                <h3 className="relative font-black text-slate-950">{title}</h3>
                <p className="relative mt-2 text-sm leading-6 text-slate-600">{text}</p>
                {/* Riga emerald sul fondo, coerente con le altre sezioni */}
                <span aria-hidden="true" className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
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
              Partecipa alla beta <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
