import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-30 border-t border-slate-200 bg-white px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Statera homepage" className="inline-flex">
              <Image src="/statera-logo.png" alt="Statera" width={160} height={54} className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-500">Il gestionale che mette in equilibrio organizzazione, strumenti nutrizionali e relazione con il cliente.</p>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-950">Esplora</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li><Link href="/#funzionalita" className="hover:text-emerald-700">Funzionalità</Link></li>
              <li><Link href="/#come-funziona" className="hover:text-emerald-700">Come funziona</Link></li>
              <li><Link href="/#pricing" className="hover:text-emerald-700">Piani</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-950">Parliamone</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li><Link href="/contatti" className="hover:text-emerald-700">Partecipa alla beta</Link></li>
              <li><a href="mailto:stateranutrition.info@gmail.com" className="break-all hover:text-emerald-700">stateranutrition.info@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Statera. Tutti i diritti riservati.</p>
          <p>Software per professionisti della nutrizione.</p>
        </div>
      </div>
    </footer>
  );
};
