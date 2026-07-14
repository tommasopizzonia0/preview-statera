import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/ui/footer";
import { CookiePreferencesButton } from "@/components/ui/cookie-consent";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy | Statera",
  description: "Come trattiamo i tuoi dati personali e quali cookie utilizziamo sul sito Statera.",
};

const sectionTitle = "mt-12 text-2xl font-black tracking-[-0.03em] text-slate-950";
const paragraph = "mt-4 text-base leading-8 text-slate-600";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <main className="relative isolate overflow-hidden px-5 pb-16 pt-34 sm:px-8 sm:pt-48">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Trasparenza</p>
          <h1 className="mt-3 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
            Privacy &amp; Cookie Policy
          </h1>
          <p className={paragraph}>
            Questa pagina descrive come Statera tratta i dati personali raccolti attraverso questo
            sito e quali strumenti di tracciamento utilizza. Per qualsiasi domanda puoi scriverci a{" "}
            <a href="mailto:stateranutrition.info@gmail.com" className="font-semibold text-emerald-700 underline underline-offset-2">
              stateranutrition.info@gmail.com
            </a>
            .
          </p>

          <h2 className={sectionTitle}>Titolare del trattamento</h2>
          <p className={paragraph}>
            Il titolare del trattamento è Statera. Puoi esercitare i tuoi diritti scrivendo
            all&apos;indirizzo email indicato sopra.
          </p>

          <h2 className={sectionTitle}>Dati raccolti tramite il form contatti</h2>
          <p className={paragraph}>
            Quando compili il form nella pagina{" "}
            <Link href="/contatti" className="font-semibold text-emerald-700 underline underline-offset-2">Contatti</Link>{" "}
            raccogliamo nome, indirizzo email e l&apos;eventuale messaggio. Questi dati vengono
            utilizzati esclusivamente per rispondere alla tua richiesta e per gestire la tua
            partecipazione alla beta di Statera. L&apos;invio delle notifiche email avviene tramite
            il fornitore Resend (Resend, Inc.), che agisce come responsabile del trattamento.
          </p>
          <p className={paragraph}>
            Se hai acconsentito ai cookie di marketing, al momento dell&apos;invio del form
            trasmettiamo a Meta Platforms Ireland Ltd. un evento di conversione che include il tuo
            indirizzo email e il tuo nome in forma pseudonimizzata (hash SHA-256), insieme a
            informazioni tecniche come indirizzo IP e user agent. Questo ci serve a misurare
            l&apos;efficacia delle nostre campagne pubblicitarie. Senza il tuo consenso, nessun dato
            viene condiviso con Meta.
          </p>

          <h2 className={sectionTitle}>Cookie e strumenti di tracciamento</h2>
          <p className={paragraph}>
            <strong className="text-slate-900">Preferenze tecniche.</strong> Salviamo la tua scelta
            sui cookie nel localStorage del browser. È uno strumento tecnico necessario e non
            traccia la tua navigazione.
          </p>
          <p className={paragraph}>
            <strong className="text-slate-900">Meta Pixel (marketing).</strong> Solo dopo il tuo
            consenso carichiamo il Meta Pixel, uno strumento di Meta Platforms Ireland Ltd. che
            utilizza cookie (tra cui <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm">_fbp</code>)
            per misurare le visite al sito, ottimizzare le campagne pubblicitarie su Facebook e
            Instagram e creare pubblici personalizzati. I dati possono essere trasferiti fuori
            dall&apos;Unione Europea secondo le garanzie previste da Meta. Maggiori informazioni
            nella{" "}
            <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 underline underline-offset-2">
              privacy policy di Meta
            </a>
            .
          </p>
          <p className={paragraph}>
            Puoi modificare la tua scelta in qualsiasi momento:
          </p>
          <div className="mt-4">
            <CookiePreferencesButton />
          </div>

          <h2 className={sectionTitle}>Conservazione dei dati</h2>
          <p className={paragraph}>
            I dati inviati tramite il form vengono conservati per il tempo necessario a gestire la
            tua richiesta e la partecipazione alla beta, e comunque non oltre 24 mesi dall&apos;ultimo
            contatto.
          </p>

          <h2 className={sectionTitle}>I tuoi diritti</h2>
          <p className={paragraph}>
            Ai sensi del Regolamento (UE) 2016/679 (GDPR) puoi chiedere in qualsiasi momento
            l&apos;accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi
            dati, opporti al trattamento e richiederne la portabilità. Puoi inoltre proporre reclamo
            al Garante per la protezione dei dati personali. Per esercitare i tuoi diritti scrivi a{" "}
            <a href="mailto:stateranutrition.info@gmail.com" className="font-semibold text-emerald-700 underline underline-offset-2">
              stateranutrition.info@gmail.com
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-slate-400">Ultimo aggiornamento: 14 luglio 2026</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
