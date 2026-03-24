"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { AnimatedButton } from "./AnimatedButton";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current || typeof window === "undefined") return;

    gsap.registerPlugin(SplitText);
    
    const ctx = gsap.context(() => {
      // Criação das instâncias do SplitText
      const heroTitleSplit = new SplitText(titleRef.current, {
        type: "lines, chars",
        linesClass: "line overflow-hidden",
        charsClass: "char"
      });

      const heroSubtitleSplit = new SplitText(subtitleRef.current, {
        type: "words",
        wordsClass: "word"
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8
      })
      .from(heroTitleSplit.lines, {
        yPercent: 100,
        duration: 1,
        ease: "power4.out",
        stagger: 0.1
      }, "-=0.4")
      .from(heroTitleSplit.chars, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.01
      }, "-=0.6")
      .from(".text-gradient", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(heroSubtitleSplit.words, {
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.03
      }, "-=0.3")
      .from(".hero-actions", {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, "-=0.4")
      .from(".scroll-indicator", {
        opacity: 0,
        y: 20,
        duration: 0.6
      }, "-=0.2")
      .from(".hero-mockup", {
        opacity: 0,
        scale: 0.95,
        y: 40,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-48 pb-24 px-8 min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,138,76,0.12)_0%,transparent_60%)] pointer-events-none -z-10"></div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.3; transform: translateX(-50%) translateY(8px); }
        }
        .animate-scrollPulse::before {
          animation: scrollPulse 1.5s infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 w-full">
        
        {/* Badge */}
        <div className="hero-badge font-body text-[10px] md:text-xs uppercase tracking-[4px] text-primary-container mb-8 py-2 px-6 border border-primary-container/30 rounded-full inline-block bg-primary-container/5 backdrop-blur-sm">
          A Nova Era Digital
        </div>

        {/* Título com animação por linhas e caracteres usando GSAP SplitText */}
        <h1 className="hero-title font-headline text-5xl md:text-7xl lg:text-8xl font-black text-on-surface leading-[1.1] tracking-tighter mb-8 w-full max-w-5xl mx-auto">
          <div ref={titleRef}>Plataforma completa para venda de</div>
          <div className="text-gradient pb-[0.1em] pt-2">Produtos Digitais</div>
        </h1>

        {/* Subtítulo com animação por palavras usando GSAP SplitText */}
        <p ref={subtitleRef} className="hero-subtitle text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-body leading-relaxed mx-auto">
          Aumente sua conversão com tecnologia de ponta, checkout ultra-rápido e o sistema anti-fraude mais inteligente do mercado.
        </p>

        {/* Call to Action */}
        <div className="hero-actions flex flex-col sm:flex-row gap-6 mb-16">
          <AnimatedButton variant="primary" orbitBorder>
            Comece a vender agora
          </AnimatedButton>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator flex flex-col items-center gap-2 text-white/40 text-[10px] md:text-xs mb-20 font-body uppercase tracking-[0.2em]">
          <span className="w-5 h-8 border-[1.5px] border-white/30 rounded-full relative before:content-[''] before:absolute before:top-1.5 before:left-1/2 before:-translate-x-1/2 before:w-1 before:h-2 before:bg-white/70 before:rounded-[2px] animate-scrollPulse"></span>
          Role para explorar
        </div>
        
        {/* Dashboard Mockup */}
        <div className="hero-mockup relative w-full max-w-6xl mx-auto">
          <Image 
            src="/mockup-dash-2048x1100.png" 
            alt="Sunize Dashboard Analytics" 
            width={2048} 
            height={1100}
            priority
            className="w-full rounded-[1.5rem] object-cover aspect-video shadow-[0_0_50px_-12px_rgba(255,138,76,0.25)] border border-white/5"
          />
        </div>
      </div>
    </section>
  );
};
