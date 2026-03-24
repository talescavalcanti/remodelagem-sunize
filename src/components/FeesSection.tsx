"use client";

import React, { useRef } from "react";
import { useTextReveal, useCardsStagger } from "@/hooks";

const fees = [
  { icon: "payments", title: "PIX D+0", subtitle: "Receba na hora", color: "border-primary-container" },
  { icon: "credit_card", title: "Cartão D+15*", subtitle: "Saque antecipado", color: "border-zinc-700" },
  { icon: "description", title: "Boleto D+1", subtitle: "Confirmação rápida", color: "border-zinc-700" },
];

export const FeesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  // Animação dos cards de taxas com stagger
  useCardsStagger(cardsRef, {
    selector: ".fee-card",
    y: 40,
    stagger: 0.12,
    duration: 0.8,
    start: "top 85%",
  });

  return (
    <section ref={sectionRef} className="py-32 px-8 border-t border-zinc-800/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={headingRef} className="text-5xl font-black editorial-text mb-6">Taxas perfeitas</h2>
          <p ref={subtitleRef} className="text-zinc-400">Transparência total para você escalar sem preocupações.</p>
        </div>
        <div ref={cardsRef} className="space-y-4">
          {fees.map((fee, i) => (
            <div 
              key={i} 
              className={`fee-card flex items-center justify-between p-6 glass-card rounded-lg border-l-4 ${fee.color} group hover:bg-surface-container transition-colors`}
            >
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined text-primary-container text-3xl">{fee.icon}</span>
                <span className="text-xl font-bold">{fee.title}</span>
              </div>
              <div className={`${i === 0 ? "text-primary-container" : "text-zinc-400"} font-black text-xl`}>
                {fee.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
