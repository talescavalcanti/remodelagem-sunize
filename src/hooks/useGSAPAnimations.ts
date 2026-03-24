"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Registrar plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

// ============================================
// Types
// ============================================

type SplitType = "lines" | "words" | "chars" | "lines,words" | "lines,chars" | "words,chars" | "lines,words,chars";

interface TextRevealOptions {
  splitType?: SplitType;
  animation?: "reveal" | "blur" | "rotation" | "scale";
  trigger?: string;
  start?: string;
  end?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  markers?: boolean;
  scrub?: boolean | number;
}

interface CardsStaggerOptions {
  selector?: string;
  y?: number;
  x?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  opacity?: number;
  scale?: number;
  markers?: boolean;
}

interface ParallaxOptions {
  direction?: "horizontal" | "vertical";
  speed?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

interface CounterOptions {
  endValue: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  start?: string;
  decimals?: number;
  markers?: boolean;
}

interface FadeInOptions {
  y?: number;
  x?: number;
  duration?: number;
  start?: string;
  delay?: number;
  markers?: boolean;
}

// ============================================
// useTextReveal Hook
// ============================================

export function useTextReveal<T extends HTMLElement>(
  ref: RefObject<T | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: TextRevealOptions = {}
) {
  const splitInstanceRef = useRef<SplitText | null>(null);

  const {
    splitType = "lines",
    animation = "reveal",
    start = "top 95%",
    stagger = 0.02,
    duration = 0.6,
    delay = 0,
    markers = false,
    scrub = false,
  } = options;

  useEffect(() => {
    if (!ref.current || !containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Criar SplitText
      const split = new SplitText(ref.current, {
        type: splitType,
        linesClass: "gsap-line",
        wordsClass: "gsap-word",
        charsClass: "gsap-char",
      });

      splitInstanceRef.current = split;

      // Definir animações baseadas no tipo
      let animationProps: gsap.TweenVars = {};
      let targets: Element[] = [];

      // Determinar targets baseado no splitType
      if (splitType.includes("chars") && split.chars) {
        targets = split.chars;
      } else if (splitType.includes("words") && split.words) {
        targets = split.words;
      } else if (splitType.includes("lines") && split.lines) {
        targets = split.lines;
      }

      // Definir propriedades de animação
      switch (animation) {
        case "reveal":
          // Adicionar overflow hidden nas linhas para efeito de máscara
          if (split.lines) {
            split.lines.forEach((line) => {
              (line as HTMLElement).style.overflow = "hidden";
            });
          }
          animationProps = {
            yPercent: 100,
            duration,
            ease: "power4.out",
            stagger,
          };
          // Para reveal, animar as linhas
          targets = split.lines || [];
          break;

        case "blur":
          animationProps = {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
            duration,
            ease: "power3.out",
            stagger,
          };
          break;

        case "rotation":
          animationProps = {
            opacity: 0,
            rotateX: 90,
            y: 50,
            transformOrigin: "center top",
            duration,
            ease: "power3.out",
            stagger,
          };
          break;

        case "scale":
          animationProps = {
            opacity: 0,
            scale: 0.8,
            y: 30,
            duration,
            ease: "power3.out",
            stagger,
          };
          break;
      }

      // Criar animação com ScrollTrigger
      gsap.from(targets, {
        ...animationProps,
        delay,
        scrollTrigger: {
          trigger: ref.current,
          start,
          markers,
          scrub,
          toggleActions: scrub ? undefined : "play none none none",
        },
      });
    }, containerRef);

    return () => {
      if (splitInstanceRef.current) {
        splitInstanceRef.current.revert();
      }
      ctx.revert();
    };
  }, [ref, containerRef, splitType, animation, start, stagger, duration, delay, markers, scrub]);

  return splitInstanceRef;
}

// ============================================
// useCardsStagger Hook
// ============================================

export function useCardsStagger<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: CardsStaggerOptions = {}
) {
  const {
    selector = ".card",
    y = 50,
    x = 0,
    stagger = 0.05,
    duration = 0.6,
    start = "top 95%",
    opacity = 0,
    scale = 1,
    markers = false,
  } = options;

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const cards = containerRef.current?.querySelectorAll(selector);
      
      if (!cards || cards.length === 0) return;

      gsap.from(cards, {
        y,
        x,
        opacity,
        scale,
        duration,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          markers,
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, y, x, stagger, duration, start, opacity, scale, markers]);
}

// ============================================
// useParallax Hook
// ============================================

export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {}
) {
  const {
    direction = "vertical",
    speed = 0.5,
    start = "top bottom",
    end = "bottom top",
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current || !containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const movement = 100 * speed;

      gsap.fromTo(
        ref.current,
        {
          [direction === "horizontal" ? "x" : "y"]: -movement,
        },
        {
          [direction === "horizontal" ? "x" : "y"]: movement,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            end,
            scrub,
            markers,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [ref, containerRef, direction, speed, start, end, scrub, markers]);
}

// ============================================
// useCounter Hook
// ============================================

export function useCounter<T extends HTMLElement>(
  ref: RefObject<T | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: CounterOptions
) {
  const {
    endValue,
    duration = 2,
    prefix = "",
    suffix = "",
    start = "top 80%",
    decimals = 0,
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current || !containerRef.current || typeof window === "undefined") return;

    const element = ref.current;
    const counter = { value: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: endValue,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start,
          markers,
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          const formattedValue = decimals > 0 
            ? counter.value.toFixed(decimals)
            : Math.round(counter.value).toLocaleString("pt-BR");
          element.textContent = `${prefix}${formattedValue}${suffix}`;
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [ref, containerRef, endValue, duration, prefix, suffix, start, decimals, markers]);
}

// ============================================
// useFadeIn Hook
// ============================================

export function useFadeIn<T extends HTMLElement>(
  ref: RefObject<T | null>,
  containerRef: RefObject<HTMLElement | null>,
  options: FadeInOptions = {}
) {
  const {
    y = 30,
    x = 0,
    duration = 0.6,
    start = "top 95%",
    delay = 0,
    markers = false,
  } = options;

  useEffect(() => {
    if (!ref.current || !containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y,
        x,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start,
          markers,
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [ref, containerRef, y, x, duration, start, delay, markers]);
}

// ============================================
// useStaggerElements Hook (para elementos arbitrários)
// ============================================

interface StaggerElementsOptions {
  selector: string;
  y?: number;
  x?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  stagger?: number;
  duration?: number;
  start?: string;
  delay?: number;
  markers?: boolean;
}

export function useStaggerElements<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: StaggerElementsOptions
) {
  const {
    selector,
    y = 40,
    x = 0,
    opacity = 0,
    scale = 1,
    rotation = 0,
    stagger = 0.05,
    duration = 0.6,
    start = "top 95%",
    delay = 0,
    markers = false,
  } = options;

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector);
      
      if (!elements || elements.length === 0) return;

      gsap.from(elements, {
        y,
        x,
        opacity,
        scale,
        rotation,
        duration,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          markers,
          toggleActions: "play none none none",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, selector, y, x, opacity, scale, rotation, stagger, duration, start, delay, markers]);
}
