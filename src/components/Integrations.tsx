"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useTextReveal, useCardsStagger } from "@/hooks";

const logoFiles = [
  "meta.webp",
  "googleads.webp",
  "kwai.png",
  "int1.png",
  "int2.png",
  "int3.png",
  "in4.png", // in4 instead of int4 based on directory
  "int5.png",
  "int6.png",
  "int7.png",
  "int8.png",
  "int9.png",
  "int10.png",
  "int11.png",
  "int12.png",
  "int13.png",
  "int14.png",
  "INT15.png",
];

export const Integrations = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Animação do heading com blur nas palavras
  useTextReveal(headingRef, sectionRef, {
    splitType: "words",
    animation: "blur",
    start: "top 85%",
    stagger: 0.03,
    duration: 0.6,
  });

  // Animação dos cards com stagger
  useCardsStagger(gridRef, {
    selector: ".integration-card",
    y: 40,
    stagger: 0.05, // Stagger reduzido devido à grande quantidade de itens
    duration: 0.6,
    start: "top 90%",
  });

  return (
    <section ref={sectionRef} className="py-32 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h3 
          ref={headingRef}
          className="uppercase tracking-[0.2em] text-zinc-500 mb-20 text-xs font-bold"
        >
          INTEGRAÇÕES NATIVAS COM AS MELHORES FERRAMENTAS
        </h3>
        
        <div 
          ref={gridRef} 
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-x-16 md:gap-y-20 max-w-5xl mx-auto"
        >
          {logoFiles.map((filename, i) => (
            <div 
              key={i} 
              className="integration-card flex items-center justify-center opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 cursor-pointer w-24 md:w-32"
            >
              <Image 
                src={`/integrações/${filename}`}
                alt={`Integration logo ${i + 1}`}
                width={150}
                height={60}
                className="w-full h-auto max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
