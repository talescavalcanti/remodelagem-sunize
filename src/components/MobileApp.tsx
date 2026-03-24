"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTextReveal, useParallax, useStaggerElements } from "@/hooks";

export const MobileApp = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Animação do heading com reveal por linhas
  useTextReveal(headingRef, sectionRef, {
    splitType: "lines",
    animation: "reveal",
    start: "top 85%",
    stagger: 0.1,
  });

  // Animação do parágrafo com blur
  useTextReveal(paragraphRef, sectionRef, {
    splitType: "words",
    animation: "blur",
    start: "top 85%",
    stagger: 0.02,
    duration: 0.6,
  });

  // Animação dos botões com stagger
  useStaggerElements(buttonsRef, {
    selector: "button",
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    start: "top 85%",
  });

  // Parallax no celular
  useParallax(phoneRef, sectionRef, {
    direction: "vertical",
    speed: 0.2,
    start: "top bottom",
    end: "bottom top",
  });

  return (
    <section ref={sectionRef} className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="flex-1">
          <h2 ref={headingRef} className="text-5xl font-black editorial-text mb-8">
            Notificações em <span className="text-gradient">Tempo Real</span>
          </h2>
          <p ref={paragraphRef} className="text-xl text-zinc-400 mb-10 leading-relaxed">
            Acompanhe suas vendas de qualquer lugar. Sinta o prazer de ouvir o "plim" a cada nova conversão direto no seu celular.
          </p>
          <div ref={buttonsRef} className="flex flex-wrap gap-4">
            <button className="bg-surface-container hover:bg-surface-container-high border border-white/5 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 w-fit">
              <svg className="w-8 h-8 text-zinc-100 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-zinc-300">Download on</div>
                <div className="text-lg font-bold text-white">App Store</div>
              </div>
            </button>
            <button className="bg-surface-container hover:bg-surface-container-high border border-white/5 p-4 rounded-xl flex items-center gap-4 transition-all duration-300 cursor-pointer group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 w-fit">
              <svg className="w-8 h-8 text-zinc-100 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 group-hover:text-zinc-300">Get it on</div>
                <div className="text-lg font-bold text-white">Google Play</div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center">
          <div ref={phoneRef}>
            <Image 
              src="/cel-mockup.png" 
              alt="Sunize App" 
              width={600} 
              height={1200} 
              className="w-[500px] relative z-10 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
