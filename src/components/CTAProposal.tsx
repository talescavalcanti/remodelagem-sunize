"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AnimatedButton } from "./AnimatedButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const CTAProposal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Animação do container com scale
      gsap.from(containerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // SplitText no heading com rotation e scale nos chars
      if (headingRef.current) {
        const headingSplit = new SplitText(headingRef.current, {
          type: "words,chars",
          wordsClass: "gsap-word",
          charsClass: "gsap-char",
        });

        gsap.from(headingSplit.chars, {
          opacity: 0,
          scale: 0.8,
          rotateX: 45,
          y: 20,
          transformOrigin: "center bottom",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.015,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animação do parágrafo
      if (paragraphRef.current) {
        const paragraphSplit = new SplitText(paragraphRef.current, {
          type: "words",
          wordsClass: "gsap-word",
        });

        gsap.from(paragraphSplit.words, {
          opacity: 0,
          y: 20,
          filter: "blur(8px)",
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.02,
          delay: 0.1,
          scrollTrigger: {
            trigger: paragraphRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }

      // Animação do botão
      gsap.from(buttonRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.6,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-8 py-20">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto primary-gradient rounded-xl p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl shadow-primary-container/40"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
        <div className="relative z-10">
          <h2 
            ref={headingRef}
            className="text-4xl md:text-5xl font-black text-on-primary leading-tight max-w-xl editorial-text"
          >
            Fatura mais de R$ 50.000 por mês?
          </h2>
          <p 
            ref={paragraphRef}
            className="text-on-primary/80 mt-6 text-lg font-medium"
          >
            Temos condições especiais de taxas e suporte dedicado para o seu negócio.
          </p>
        </div>
        <div ref={buttonRef}>
          <AnimatedButton variant="inverted">
            Quero minha proposta
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};
