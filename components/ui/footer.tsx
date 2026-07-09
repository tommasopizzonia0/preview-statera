"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconMail } from "@tabler/icons-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const textDark = "text-slate-900";
  const primaryGreen = "text-[#059669]";

  return (
    <footer className="w-full bg-white border-t border-slate-200 pt-20 pb-10 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNA 1: LOGO E DESCRIZIONE */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/statera-logo.png" 
                alt="Statera Logo" 
                width={140} 
                height={50} 
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              L'eccellenza tecnologica al servizio della nutrizione. 
              Eleviamo la pratica professionale dei nutrizionisti d'élite.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-[#059669] transition-colors"><IconBrandLinkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-[#059669] transition-colors"><IconBrandInstagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-[#059669] transition-colors"><IconBrandX size={20} /></a>
            </div>
          </div>

          {/* COLONNA 2: PRODOTTI */}
          <div>
            <h4 className={`${textDark} font-bold mb-6`}>Prodotti</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Piani Alimentari</Link></li>
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Analisi Biometrica</Link></li>
              <li><Link href="#" className="hover:text-[#059669] transition-colors">App Paziente</Link></li>
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Dashboard Medico</Link></li>
            </ul>
          </div>

          {/* COLONNA 3: AZIENDA */}
          <div>
            <h4 className={`${textDark} font-bold mb-6`}>Azienda</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Chi Siamo</Link></li>
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Funzionalità</Link></li>
              <li><Link href="/contatti" className="hover:text-[#059669] transition-colors">Contatti</Link></li>
              <li><Link href="#" className="hover:text-[#059669] transition-colors">Lavora con noi</Link></li>
            </ul>
          </div>

          {/* COLONNA 4: NEWSLETTER / CTA */}
          <div>
            <h4 className={`${textDark} font-bold mb-6`}>Resta aggiornato</h4>
            <p className="text-slate-500 text-sm mb-4">Ricevi le ultime novità sull'integrazione AI in nutrizione.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#059669]/20 focus:border-[#059669] transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#059669] hover:text-[#047857]">
                <IconMail size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} Statera Excellence. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};