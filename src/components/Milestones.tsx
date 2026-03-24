"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTextReveal, useCardsStagger } from "@/hooks";

export const Milestones = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Animação do heading com reveal por linhas
  useTextReveal(headingRef, sectionRef, {
    splitType: "lines",
    animation: "reveal",
    start: "top 85%",
    stagger: 0.1,
  });

  // Animação do subtítulo com blur
  useTextReveal(subtitleRef, sectionRef, {
    splitType: "words",
    animation: "blur",
    start: "top 85%",
    stagger: 0.02,
    duration: 0.6,
  });

  // Animação da imagem com stagger (usando a mesma lógica de animação anterior)
  useCardsStagger(imageContainerRef, {
    selector: ".milestone-image",
    y: 80,
    scale: 0.95,
    duration: 1.2,
    start: "top 80%",
  });

  return (
    <section ref={sectionRef} className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center relative z-20">
          <h2 ref={headingRef} className="text-5xl font-black editorial-text mb-4">
            Reconhecemos cada etapa do seu crescimento
          </h2>
          <p ref={subtitleRef} className="text-zinc-400">
            Prêmios exclusivos para os players que dominam o mercado.
          </p>
        </div>
        
        <div ref={imageContainerRef} className="flex justify-center w-full -mt-8 md:-mt-16 relative z-10 pointer-events-none">
          <div className="milestone-image relative w-full max-w-5xl flex justify-center items-center group pointer-events-auto">
            <Image 
              src="/mokcupplcas.png" 
              alt="Placas de Premiação Sunize" 
              width={1200} 
              height={600} 
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};
