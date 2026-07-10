"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#funzionalita", label: "Funzionalità" },
  { href: "/#come-funziona", label: "Come funziona" },
  { href: "/#pricing", label: "Piani" },
  { href: "/contatti", label: "Contatti" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav aria-label="Navigazione principale" className="mx-auto flex h-[140px] max-w-[96rem] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Statera, torna alla homepage" className="flex min-w-0 items-center">
          <Image src="/statera-logo.png" alt="Statera" width={290} height={94} priority className="h-20 w-auto object-contain sm:h-24" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-700">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/contatti" className="inline-flex min-h-11 items-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition-colors hover:bg-emerald-700">
            Richiedi una demo
          </Link>
        </div>

        <button type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Chiudi menu" : "Apri menu"} onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-900 lg:hidden">
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`absolute bottom-1 left-0 block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="fixed inset-x-0 top-[140px] h-[calc(100dvh-140px)] border-t border-slate-100 bg-white px-5 py-8 lg:hidden">
          <div className="mx-auto flex h-full max-w-lg flex-col">
            <div className="flex flex-col">
              {links.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="border-b border-slate-100 py-5 text-2xl font-black tracking-tight text-slate-950">
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href="/contatti" onClick={() => setOpen(false)} className="mt-auto flex min-h-14 items-center justify-center rounded-full bg-emerald-500 px-6 font-bold text-slate-950">
              Richiedi una demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
