"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  // Colore verde Statera per gli hover
  const hoverGreen = "hover:text-[#059669]";

  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        {/* LOGO */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-10 p-1.5">
            <span className="sr-only">Statera</span>
            {/* NOTA: Assicurati che l'immagine del logo sia scura o colorata per vedersi sul bianco! */}
            <Image
              src="/statera-logo.png"
              alt="Statera Logo"
              width={280}
              height={100}
              className="h-40 w-auto object-contain"
            />
          </a>
        </div>

        {/* HAMBURGER MENU (Mobile) */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">Apri menu principale</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex lg:gap-x-12 relative">

          {/* Dropdown Product */}
          <div className="relative">
            <button
              onClick={() => setProductMenuOpen(!productMenuOpen)}
              className={`flex items-center gap-x-1 text-sm/6 font-semibold transition-colors ${
                productMenuOpen ? "text-[#059669]" : "text-gray-900 hover:text-gray-600"
              }`}
            >
              Prodotti
              <svg 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className={`size-5 flex-none transition-transform ${
                  productMenuOpen ? "rotate-180 text-[#059669]" : "text-gray-400"
                }`}
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </button>

            {/* Pannello Dropdown */}
            {productMenuOpen && (
              <div className="absolute -left-8 top-full mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 z-50">
                <div className="p-4">
                  {[
                    { name: 'Piani Alimentari', desc: 'Generazione rapida e precisa', icon: 'M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z' },
                    { name: 'Analisi Grafica', desc: 'Monitora i progressi dei pazienti', icon: 'M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59' },
                    { name: 'Sicurezza Dati', desc: 'Privacy garantita al 100%', icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99' },
                  ].map((item, index) => (
                    <div key={index} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 transition-colors">
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white border border-transparent group-hover:border-gray-200 shadow-sm transition-all">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6 text-gray-500 group-hover:text-[#059669]">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div className="flex-auto">
                        <a href="#" className="block font-semibold text-gray-900 group-hover:text-[#059669]">
                          {item.name}
                          <span className="absolute inset-0"></span>
                        </a>
                        <p className="mt-1 text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a href="#" className={`text-sm/6 font-semibold text-gray-900 ${hoverGreen} transition-colors`}>Funzionalità</a>
          <Link href="/contatti" className={`text-sm/6 font-semibold text-gray-900 ${hoverGreen} transition-colors`}>
            Contatti
          </Link>
          <a href="#" className={`text-sm/6 font-semibold text-gray-900 ${hoverGreen} transition-colors`}>Chi Siamo</a>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-[#059669] hover:text-[#047857] transition-colors">
            Accedi all&apos;Eccellenza <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Statera</span>
                <Image src="/statera-logo.jpg" alt="Statera Logo" width={150} height={50} className="h-8 w-auto object-contain" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-500 hover:text-gray-900"
              >
                <span className="sr-only">Chiudi menu</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      onClick={() => setMobileProductOpen(!mobileProductOpen)}
                      className="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      Prodotti
                      <svg 
                        viewBox="0 0 20 20" 
                        fill="currentColor" 
                        className={`size-5 flex-none transition-transform ${
                          mobileProductOpen ? "rotate-180 text-[#059669]" : "text-gray-400"
                        }`}
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </button>
                    {mobileProductOpen && (
                      <div className="mt-2 space-y-2">
                        <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium text-gray-600 hover:bg-gray-50 hover:text-[#059669]">Piani Alimentari</a>
                        <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium text-gray-600 hover:bg-gray-50 hover:text-[#059669]">Analisi Grafica</a>
                        <a href="#" className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-medium text-gray-600 hover:bg-gray-50 hover:text-[#059669]">Sicurezza Dati</a>
                      </div>
                    )}
                  </div>
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#059669]">Funzionalità</a>
                  <Link href="/contatti" onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[#059669]">
                    Contatti
                  </Link>
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[#059669] hover:bg-gray-50">Accedi all&apos;Eccellenza</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};