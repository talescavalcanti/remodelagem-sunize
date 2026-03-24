"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const showAnimRef = useRef<gsap.core.Tween | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (!navRef.current || !logoRef.current || typeof window === "undefined") return;

    const links = linksRef.current?.querySelectorAll("a");
    const buttons = actionsRef.current?.querySelectorAll("button");

    // Set initial state (hidden)
    gsap.set(navRef.current, { y: -100, opacity: 0 });
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8, x: -20 });
    if (links?.length) gsap.set(links, { opacity: 0, y: -15 });
    if (buttons?.length) gsap.set(buttons, { opacity: 0, y: -10 });

    // Animate in
    const tl = gsap.timeline({ delay: 0.1 });

    tl.to(navRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(logoRef.current, {
      opacity: 1,
      scale: 1,
      x: 0,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.4")
    .to(links || [], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.08,
    }, "-=0.3")
    .to(buttons || [], {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power3.out",
      stagger: 0.1,
    }, "-=0.3");

    // After entrance animation completes, setup scroll hide/show behavior
    tl.eventCallback("onComplete", () => {
      if (!navRef.current) return;

      // Create the hide/show animation
      showAnimRef.current = gsap.from(navRef.current, {
        yPercent: -150,
        paused: true,
        duration: 0.25,
        ease: "power2.inOut",
      }).progress(1);

      // Create ScrollTrigger to detect scroll direction
      scrollTriggerRef.current = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (showAnimRef.current) {
            // Scroll up: show navbar, Scroll down: hide navbar
            self.direction === -1 
              ? showAnimRef.current.play() 
              : showAnimRef.current.reverse();
          }
        },
      });
    });

    return () => {
      tl.kill();
      if (showAnimRef.current) showAnimRef.current.kill();
      if (scrollTriggerRef.current) scrollTriggerRef.current.kill();
    };
  }, []);

  return (
    <nav 
      ref={navRef}
      className="liquid-glass fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 py-3.5 rounded-full mt-6 mx-auto w-auto max-w-fit font-body antialiased tracking-tight transition-all duration-300"
    >
      <div ref={logoRef} className="flex-shrink-0 cursor-pointer">
        <Image src="/logo-1.png" alt="Sunize" width={140} height={40} className="h-8 w-auto object-contain" priority />
      </div>
      <div ref={linksRef} className="hidden md:flex items-center gap-5 mx-8">
        <a className="text-primary-container font-semibold text-sm hover:text-primary-container hover:scale-105 transition-all duration-300 active:scale-95" href="#">Features</a>
        <a className="text-zinc-400 font-medium text-sm hover:text-primary-container hover:scale-105 transition-all duration-300 active:scale-95" href="#">Solutions</a>
        <a className="text-zinc-400 font-medium text-sm hover:text-primary-container hover:scale-105 transition-all duration-300 active:scale-95" href="#">Pricing</a>
        <a className="text-zinc-400 font-medium text-sm hover:text-primary-container hover:scale-105 transition-all duration-300 active:scale-95" href="#">Affiliates</a>
      </div>
      <div ref={actionsRef} className="flex items-center gap-3">
        <button className="text-zinc-400 font-medium hover:text-white transition-colors text-sm px-3 cursor-pointer">Login</button>
        <button className="primary-gradient text-on-primary font-bold px-5 py-2 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary-container/20 text-sm cursor-pointer">Get Started</button>
      </div>
    </nav>
  );
};
