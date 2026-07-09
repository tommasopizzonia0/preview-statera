"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export const FeaturesGrid = () => {
  const textDark = "text-slate-950";
  
  // Stile Card: Solido, bordo spesso e glow coordinato
  const cardStyle = "h-[300px] bg-white/95 border-2 border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] backdrop-blur-lg transition-all duration-500 overflow-hidden";
  
  const headerGradient = "absolute z-10 top-0 flex-col items-start bg-gradient-to-b from-black/80 to-transparent w-full p-4 pt-5 pb-10";

  return (
    /* CONTAINER POTENZIATO:
       - animate-pulse-glow: una nuova animazione per far brillare i bordi (definita sotto)
       - border-y-[6px]: bordo ancora più spesso per un impatto massimo
       - shadow-[0_0_60px...]: bagliore esterno molto marcato
    */
    <section className="w-full bg-emerald-100/25 border-y-2 md:border-y-[6px] border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.2),inset_0_0_60px_rgba(16,185,129,0.12)] md:shadow-[0_0_60px_rgba(16,185,129,0.3),inset_0_0_120px_rgba(16,185,129,0.2)] py-16 md:py-24 relative overflow-hidden animate-pulse-glow">
      
      {/* Background decorativo con luci soffuse */}
      <div className="absolute top-1/2 left-0 hidden md:block w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-1/2 right-0 hidden md:block w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[160px] -z-10" />

      <div className="max-w-[1200px] gap-5 md:gap-10 grid grid-cols-12 md:grid-rows-2 px-5 md:px-8 mx-auto">
        
        {/* CARD 1: PIANI ALIMENTARI */}
        <Card className={`col-span-12 sm:col-span-4 ${cardStyle}`}>
          <CardHeader className={headerGradient}>
            <p className="text-tiny text-emerald-300 uppercase font-black text-left w-full tracking-[0.2em]">Precisione</p>
            <h4 className="text-white font-black text-xl text-left w-full leading-tight">Piani Alimentari <br/> Sartoriali</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Diet Plan"
            className="z-0 w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop"
          />
        </Card>

        {/* CARD 2: DATABASE ALIMENTI */}
        <Card className={`col-span-12 sm:col-span-4 ${cardStyle}`}>
          <CardHeader className={headerGradient}>
            <p className="text-tiny text-emerald-300 uppercase font-black text-left w-full tracking-[0.2em]">Eccellenza</p>
            <h4 className="text-white font-black text-xl text-left w-full leading-tight">Database Alimenti <br/> Premium</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Premium Foods"
            className="z-0 w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop"
          />
        </Card>

        {/* CARD 3: ANALISI BIOMETRICA */}
        <Card className={`col-span-12 sm:col-span-4 ${cardStyle}`}>
          <CardHeader className={headerGradient}>
            <p className="text-tiny text-emerald-300 uppercase font-black text-left w-full tracking-[0.2em]">Scienza</p>
            <h4 className="text-white font-black text-xl text-left w-full leading-tight">Analisi Biometrica <br/> Avanzata</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Biometric Analysis"
            className="z-0 w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700"
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
          />
        </Card>

        {/* CARD 4: DASHBOARD (GRANDE) */}
        <Card isFooterBlurred className={`w-full h-[300px] col-span-12 sm:col-span-5 ${cardStyle}`}>
          <CardHeader className={headerGradient}>
            <p className="text-tiny text-emerald-300 uppercase font-black text-left w-full tracking-[0.2em]">Nuovo Standard</p>
            <h4 className="text-white font-black text-2xl text-left w-full tracking-tight italic">Dashboard d&apos;Élite</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Elite Dashboard"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover opacity-80"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
          />
          <CardFooter className="absolute bg-white bottom-0 border-t-2 border-emerald-500/40 z-10 justify-between backdrop-blur-md p-4">
            <div className="text-left flex flex-col gap-0.5">
              <p className={`${textDark} text-tiny font-black tracking-tight uppercase`}>Esperienza Immersiva</p>
              <p className="text-slate-600 text-tiny font-bold italic">Gestione pazienti d&apos;eccellenza.</p>
            </div>
            <Button className="text-tiny bg-[#059669] text-white hover:bg-[#10b981] font-black shadow-[0_0_20px_rgba(5,150,105,0.6)]" radius="full" size="sm">
              Scopri di più
            </Button>
          </CardFooter>
        </Card>

        {/* CARD 5: AGENDA E PROMEMORIA (GRANDE) */}
        <Card isFooterBlurred className={`w-full h-[300px] col-span-12 sm:col-span-7 ${cardStyle}`}>
          <CardHeader className={headerGradient}>
            <p className="text-tiny text-emerald-300 uppercase font-black text-left w-full tracking-[0.2em]">Organizzazione</p>
            <h4 className="text-white font-black text-xl text-left w-full leading-tight">Agenda e promemoria</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Agenda professionale e pianificazione degli appuntamenti"
            className="z-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=75&w=1000&auto=format&fit=crop"
          />
          <CardFooter className="absolute bg-white bottom-0 z-10 border-t-2 border-emerald-500/40 backdrop-blur-md p-4">
            <div className="flex grow gap-3 items-center text-left">
              <div className="flex flex-col gap-0.5">
                <p className={`text-tiny ${textDark} font-black tracking-tight uppercase`}>Statera Agenda</p>
                <p className="text-slate-600 text-tiny font-bold italic">Visite e follow-up sempre sotto controllo.</p>
              </div>
            </div>
            <Button radius="full" size="sm" className="bg-[#10b981] text-white font-black hover:bg-[#059669] transition-all shadow-[0_0_20px_rgba(16,185,129,0.6)]">
              Incluso nel Pro
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* AGGIUNGI QUESTI STILI NEL TUO CSS GLOBALE O COME STYLE TAG */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 50px rgba(16, 185, 129, 0.2), inset 0 0 100px rgba(16, 185, 129, 0.1); 
            border-color: rgba(16, 185, 129, 0.4);
          }
          50% { 
            box-shadow: 0 0 80px rgba(16, 185, 129, 0.4), inset 0 0 130px rgba(16, 185, 129, 0.2); 
            border-color: rgba(16, 185, 129, 0.7);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
