"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useSmoothScroll } from "./SmoothScrollProvider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: "shopping_cart_checkout",
    title: "Checkout Transparente Personalizável",
    description: "Customize cada detalhe da sua página de pagamento e converta até 35% mais. Cores, textos, ordem dos campos e muito mais sob seu controle total.",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/20 to-amber-500/10",
  },
  {
    icon: "verified",
    title: "Aprovação Instantânea de Produtos",
    description: "Não espere dias para começar a vender. Nossa IA analisa e aprova seus produtos digitais em segundos, com total segurança e conformidade.",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: "subscriptions",
    title: "Área de Membros Estilo Netflix",
    description: "Ofereça uma experiência premium para seus alunos com interface fluida, design moderno e navegação intuitiva que aumenta o engajamento.",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/20 to-purple-500/10",
  },
  {
    icon: "group_work",
    title: "Afiliação e Marketplace",
    description: "Escalone suas vendas com nosso exército de afiliados qualificados. Sistema completo de co-produção e gestão de comissões automatizado.",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: "shield_lock",
    title: "Infraestrutura Sem Bloqueios",
    description: "Preparada para grandes lançamentos e tráfego massivo. Seus pagamentos nunca serão bloqueados, garantindo fluxo de caixa constante.",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/20 to-pink-500/10",
  },
  {
    icon: "autorenew",
    title: "Recuperação Smart de Vendas",
    description: "Recupere carrinhos abandonados automaticamente via WhatsApp, E-mail e SMS. Aumente seu faturamento em até 30% sem esforço extra.",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/20 to-orange-500/10",
  },
];

export const BentoGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);
  const { isReady } = useSmoothScroll();

  useEffect(() => {
    // Only initialize animation when SmoothScroll is ready to avoid pin conflicts
    if (typeof window === "undefined" || !isReady) return;

    const initAnimation = () => {
      if (
        !sectionRef.current ||
        !listRef.current ||
        !fillRef.current ||
        !slidesContainerRef.current
      ) return;

      // Cleanup previous
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }

      ctxRef.current = gsap.context(() => {
        const listItems = gsap.utils.toArray<HTMLLIElement>(".feature-list-item", listRef.current!);
        const slides = gsap.utils.toArray<HTMLDivElement>(".feature-slide", slidesContainerRef.current!);

        if (listItems.length === 0 || slides.length === 0) return;

        // Set initial fill state based on first item visible
        if (fillRef.current) {
          gsap.set(fillRef.current, {
            scaleY: 1 / listItems.length,
            transformOrigin: "top left"
          });
        }

        // Create main timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            // Dynamically calculate scroll distance based on number of items
            end: "+=" + listItems.length * 100 + "%",
            pin: true,
            scrub: true,
            pinSpacing: true, // Garante que o GSAP adicione o espaçamento
            // A documentação do ScrollSmoother diz para não usar pinReparent e nem pinType: "transform" a não ser que absolutamente necessário
            // O padrão é usar o wrapper do ScrollSmoother para calcular
          }
        });

        // Loop through items to build timeline exactly like the JS reference
        listItems.forEach((item, i) => {
          const previousItem = listItems[i - 1];

          if (previousItem) {
            // Animate transition between previous and current
            tl.set(item, { color: "#ff8a4c" }, 0.5 * i) // equivalent to #0ae448
              .to(
                slides[i],
                {
                  autoAlpha: 1,
                  duration: 0.2
                },
                "<"
              )
              .set(previousItem, { color: "#71717a" }, "<") // equivalent to #fffce1
              .to(
                slides[i - 1],
                {
                  autoAlpha: 0,
                  duration: 0.2
                },
                "<"
              );
          } else {
            // Initial state for the very first item
            gsap.set(item, { color: "#ff8a4c" });
            gsap.set(slides[i], { autoAlpha: 1 });
          }
        });

        // Animate the progress bar fill over the entire duration
        tl.to(
          fillRef.current,
          {
            scaleY: 1,
            transformOrigin: "top left",
            ease: "none",
            duration: tl.duration()
          },
          0
        ).to({}, {}); // small pause at the end before it unpins

      }, sectionRef);
    };

    // Small delay to ensure layout is fully calculated after SmoothScroll ready
    // We increase this delay slightly to ensure the wrapper has taken effect
    const timer = setTimeout(() => {
      initAnimation();
      // Force ScrollTrigger to refresh AFTER creating the pin
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, 100);

    return () => {
      clearTimeout(timer);
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, [isReady]);

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen bg-surface-container-lowest"
      id="features"
    >
      <div className="h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Side - List */}
          <div className="lg:w-2/5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-black editorial-text mb-4 text-white">
              Por que a Sunize?
            </h2>
            <div className="h-1.5 w-24 primary-gradient rounded-full mb-12"></div>

            <div className="flex gap-6">
              <div className="relative w-1 bg-zinc-800 rounded-full overflow-hidden self-stretch">
                <div
                  ref={fillRef}
                  className="absolute top-0 left-0 w-full h-full primary-gradient rounded-full"
                />
              </div>

              <ul ref={listRef} className="flex flex-col gap-8 m-0 p-0 pl-2 list-none grow-0">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="feature-list-item text-xl md:text-2xl font-bold text-zinc-600 transition-all duration-300 cursor-default"
                  >
                    {feature.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Slides */}
          <div className="lg:w-3/5 flex items-center justify-center">
            {/* Altura explícita garante que o container pai não esmague o card em resoluções com pouco `h-screen` */}
            <div ref={slidesContainerRef} className="relative w-full max-w-[380px] md:max-w-[420px] mx-auto shrink-0 h-[700px] md:h-[875px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-slide absolute inset-0 w-full top-1/2 -translate-y-1/2 opacity-0 invisible rounded-[2.5rem] p-[1.5px] shadow-2xl overflow-hidden"
                >
                  {/* Borda gradiente da referência Dark Premium */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90`}></div>

                  {/* Fundo interno puramente escuro */}
                  <div className="relative h-full w-full bg-[#0a0a0a] rounded-[calc(2.5rem-1.5px)] p-6 md:p-8 flex flex-col items-center justify-between text-center overflow-hidden">

                    {/* Glow interno ultra-suave */}
                    <div className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-gradient-to-b ${feature.gradient} blur-[120px] opacity-[0.08] pointer-events-none`}></div>
                    <div className={`absolute -bottom-32 left-1/2 -translate-x-1/2 w-[150%] h-64 bg-gradient-to-t ${feature.gradient} blur-[120px] opacity-[0.08] pointer-events-none`}></div>

                    {/* Top Text */}
                    <div className={`w-full text-center font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs bg-clip-text text-transparent bg-gradient-to-r ${feature.gradient} mt-1 shrink-0`}>
                      SUNIZE FEATURE
                    </div>

                    {/* Central Area: Removido overflow-y-auto e no-scrollbar para nunca gerar rolagem em cards premium */}
                    <div className="flex flex-col items-center justify-center w-full grow my-2 md:my-4 px-2">

                      {/* Símbolo Numérico Elegante */}
                      <div className="relative flex items-center justify-center mb-6 w-24 h-24 md:w-28 md:h-28 shrink-0">
                        {/* Anéis orbitais sutis */}
                        <div className={`absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_20s_linear_infinite]`}></div>
                        <div className={`absolute inset-2 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]`}></div>

                        {/* Glow Central do Número */}
                        <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${feature.bgGradient} blur-xl opacity-30`}></div>

                        {/* O Número Grande */}
                        <span className={`relative text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br ${feature.gradient} tracking-tighter drop-shadow-2xl`}>
                          0{index + 1}
                        </span>
                      </div>

                      {/* Display Typography */}
                      <h3 className="text-xl md:text-2xl font-black text-white mb-2 md:mb-3 font-display tracking-tight leading-tight shrink-0">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-500 text-[13px] md:text-sm leading-relaxed max-w-sm font-medium">
                        {feature.description}
                      </p>
                    </div>

                    {/* Bottom Text (Rotated 180) */}
                    <div className={`w-full text-center font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs bg-clip-text text-transparent bg-gradient-to-l ${feature.gradient} rotate-180 mb-1 shrink-0`}>
                      SUNIZE FEATURE
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
