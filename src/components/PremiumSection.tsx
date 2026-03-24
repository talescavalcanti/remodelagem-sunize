"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { PremiumButton } from "./PremiumButton";
import { useTextReveal, useStaggerElements, useParallax, useFadeIn } from "@/hooks";

export const PremiumSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Animação do heading com reveal por linhas
  useTextReveal(headingRef, sectionRef, {
    splitType: "lines",
    animation: "reveal",
    start: "top 85%",
    stagger: 0.1,
  });

  // Animação dos itens da lista com stagger
  useStaggerElements(listRef, {
    selector: "li",
    y: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    start: "top 85%",
  });

  // Animação do parágrafo com blur
  useTextReveal(paragraphRef, sectionRef, {
    splitType: "words",
    animation: "blur",
    start: "top 85%",
    stagger: 0.02,
    duration: 0.6,
  });

  // Animação do botão
  useFadeIn(buttonRef, sectionRef, {
    y: 30,
    duration: 0.8,
    start: "top 90%",
  });

  // Parallax na imagem
  useParallax(imageRef, sectionRef, {
    direction: "vertical",
    speed: 0.15,
    start: "top bottom",
    end: "bottom top",
  });

  return (
    <section ref={sectionRef} className="py-32 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <h2 ref={headingRef} className="text-5xl font-black editorial-text mb-8">Área de Membros Premium</h2>
          <ul ref={listRef} className="space-y-6 mb-12">
            {[
              "Interface Estilo Netflix imersiva",
              "Sem custos adicionais por aluno",
              "Totalmente personalizável com sua marca"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">check</span>
                </div>
                <span className="text-xl text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
          <p ref={paragraphRef} className="text-zinc-500 mb-10 max-w-lg leading-relaxed">
            Ofereça o melhor ambiente de aprendizado para seus clientes. Reduza o churn e aumente a percepção de valor do seu produto.
          </p>
          <div ref={buttonRef}>
            <PremiumButton>
              Explorar área de membros
            </PremiumButton>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div ref={imageRef}>
            <Image 
              src="/member-mockup.png" 
              alt="Sunize Members Area" 
              width={800} 
              height={600}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
