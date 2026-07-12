"use client";

import { useEffect, useRef, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  // Blocca lo scroll della pagina col menu aperto. Il solo overflow:hidden non
  // basta su iOS Safari: serve congelare il body con position:fixed alla
  // posizione corrente e ripristinarla alla chiusura.
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const { style } = document.body;
    const rootStyle = document.documentElement.style;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";
    rootStyle.overflow = "hidden";
    rootStyle.overscrollBehavior = "none";
    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      rootStyle.overflow = "";
      rootStyle.overscrollBehavior = "";
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Col menu mobile aperto il body è congelato (position:fixed): scrollare subito
  // non avrebbe effetto e lo sblocco ripristinerebbe la vecchia posizione. Quindi
  // memorizziamo la destinazione e scrolliamo dopo lo sblocco (quando open→false).
  const pendingHashRef = useRef<string | null>(null);

  // Scroll manuale (niente scrollIntoView: su iOS subito dopo un reflow viene
  // ignorato). 96px = scroll-mt-24 delle sezioni, per non finire sotto la barra.
  const scrollToHash = (hash: string) => {
    const target = document.getElementById(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
    history.replaceState(null, "", `#${hash}`);
  };

  useEffect(() => {
    if (open || !pendingHashRef.current) return;
    const hash = pendingHashRef.current;
    pendingHashRef.current = null;
    // Doppio rAF: lo scroll parte a layout assestato, dopo lo sblocco del body.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(hash)));
  }, [open]);

  // Se l'URL contiene già l'hash (es. secondo click su "Piani"), il browser non
  // scrolla di nuovo: gestiamo lo scroll a mano quando siamo già in homepage.
  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1 || window.location.pathname !== "/" || !document.getElementById(href.slice(hashIndex + 1))) {
      setOpen(false);
      return;
    }
    event.preventDefault();
    const hash = href.slice(hashIndex + 1);
    if (open) {
      pendingHashRef.current = hash;
      setOpen(false);
    } else {
      scrollToHash(hash);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Lo slot ha altezza fissa (niente salti di layout): è la barra interna che,
          dopo lo scroll, si stringe in una pillola di vetro smerigliato. */}
      <div className="flex h-24 items-center px-3 sm:h-32 sm:px-6 lg:px-8">
        <nav
          aria-label="Navigazione principale"
          className={`mx-auto flex w-full items-center justify-between gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,0.9,0.3,1)] ${
            scrolled && !open
              ? "h-16 max-w-6xl rounded-full border border-emerald-100/60 bg-white/45 px-3 shadow-[0_16px_48px_rgba(5,150,105,0.12)] backdrop-blur-xl sm:h-20 sm:px-6"
              : "h-full max-w-[96rem] border border-transparent bg-transparent px-1"
          }`}
        >
          <Link href="/" aria-label="Statera, torna alla homepage" className="flex min-w-0 items-center">
            <Image
              src="/statera-logo.png"
              alt="Statera"
              width={290}
              height={94}
              priority
              className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.22,0.9,0.3,1)] ${scrolled && !open ? "h-12 sm:h-14" : "h-[4.5rem] sm:h-24"}`}
            />
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="relative py-2 text-sm font-semibold text-slate-700 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:mx-auto after:h-0.5 after:w-0 after:rounded-full after:bg-emerald-500 after:transition-all after:duration-300 hover:text-emerald-700 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contatti"
              className={`inline-flex items-center rounded-full bg-slate-950 px-5 text-sm font-bold text-white transition-all duration-500 ease-[cubic-bezier(0.22,0.9,0.3,1)] hover:bg-emerald-700 ${scrolled && !open ? "min-h-10" : "min-h-11"}`}
            >
              Partecipa alla beta
            </Link>
          </div>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((value) => !value)}
            className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden ${
              open ? "border-emerald-300 bg-white text-emerald-700" : "border-slate-200 bg-white/70 text-slate-900"
            }`}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`absolute bottom-1 left-0 block h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
      </div>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 -z-10 overflow-y-auto overscroll-contain bg-gradient-to-b from-emerald-50/97 via-white/97 to-white pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-28 backdrop-blur-2xl sm:pt-36 lg:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-lg flex-col px-6">
            <div className="flex flex-col">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleAnchorClick(event, link.href)}
                  className="reveal-up group flex items-baseline gap-4 border-b border-emerald-100/80 py-5"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <span className="font-mono text-xs font-black text-emerald-500">0{index + 1}</span>
                  <span className="text-3xl font-black tracking-tight text-slate-950 transition-colors group-hover:text-emerald-700">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="reveal-up mt-auto flex flex-col gap-4 pt-10" style={{ animationDelay: "260ms" }}>
              <Link
                href="/contatti"
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-center rounded-full bg-slate-950 px-6 font-bold text-white transition-colors hover:bg-emerald-700"
              >
                Partecipa alla beta
              </Link>
              <a
                href="mailto:stateranutrition.info@gmail.com"
                className="text-center text-sm font-semibold text-slate-500 hover:text-emerald-700"
              >
                stateranutrition.info@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
