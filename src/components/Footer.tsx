"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(SplitText, ScrollTrigger);
}

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // CTA Section animation
      if (ctaRef.current) {
        const ctaTitle = ctaRef.current.querySelector(".cta-title");
        if (ctaTitle) {
          const split = new SplitText(ctaTitle, {
            type: "chars,words",
            charsClass: "gsap-char",
          });

          gsap.from(split.chars, {
            opacity: 0,
            y: 30,
            rotateX: 45,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.02,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        }

        const ctaElements = ctaRef.current.querySelectorAll(".cta-fade");
        gsap.from(ctaElements, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      // Main footer content animation
      if (mainRef.current) {
        const columns = mainRef.current.querySelectorAll(".footer-column");
        gsap.from(columns, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // Bottom bar animation
      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="w-full bg-surface-container-lowest font-body">
      {/* Newsletter CTA Section */}
      <div
        ref={ctaRef}
        className="w-full border-t border-zinc-800/30 py-20 px-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-center lg:text-left">
            <h3 className="cta-title text-3xl md:text-4xl font-display font-bold text-white mb-3">
              Fique por dentro das novidades
            </h3>
            <p className="cta-fade text-zinc-400 max-w-md">
              Receba dicas exclusivas, atualizações e conteúdos sobre o mercado digital.
            </p>
          </div>
          <div className="cta-fade flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="px-5 py-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary-container/50 transition-colors w-full sm:w-80"
            />
            <button className="px-6 py-3.5 bg-primary-container text-zinc-900 font-semibold rounded-xl hover:bg-primary-container/90 transition-colors whitespace-nowrap">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        ref={mainRef}
        className="w-full border-t border-zinc-800/30 py-16 px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="footer-column col-span-2 md:col-span-3 lg:col-span-2">
            <div className="text-2xl font-bold text-primary-container mb-4 font-display">
              Sunize
            </div>
            <p className="text-zinc-400 text-sm mb-6 max-w-xs">
              A plataforma completa para criadores digitais venderem seus produtos com as melhores taxas do mercado.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            {/* App Download */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 uppercase">Download na</div>
                  <div className="text-sm font-semibold text-white">App Store</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 9.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-zinc-500 uppercase">Disponível no</div>
                  <div className="text-sm font-semibold text-white">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="footer-column">
            <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Produto</h5>
            <ul className="space-y-3 text-sm">
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Funcionalidades</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Tarifas</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Integrações</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">App Mobile</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Área de Membros</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Empresa</h5>
            <ul className="space-y-3 text-sm">
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Sobre nós</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Carreiras</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Blog</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Imprensa</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Parceiros</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Suporte</h5>
            <ul className="space-y-3 text-sm">
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Central de Ajuda</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">WhatsApp</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Contato</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Status</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Comunidade</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h5 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Legal</h5>
            <ul className="space-y-3 text-sm">
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Termos de Uso</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Privacidade</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">Cookies</a></li>
              <li><a className="text-zinc-400 hover:text-white transition-colors" href="#">LGPD</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        ref={bottomRef}
        className="w-full border-t border-zinc-800/30 py-8 px-8"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-zinc-500 text-sm text-center md:text-left">
            © 2025 Sunize Tecnologia LTDA. CNPJ: 00.000.000/0001-00. Todos os direitos reservados.
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-4">
            <span className="text-zinc-600 text-xs uppercase tracking-wider">Pagamentos:</span>
            <div className="flex items-center gap-3">
              {/* Pix */}
              <div className="w-10 h-6 flex items-center justify-center bg-zinc-900 rounded">
                <svg className="w-8 h-4" viewBox="0 0 512 512" fill="none">
                  <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 googl372.5 googl391.5 372.5 391.5V391.5C googl391.5 397.8 googl388.9 403.9 googl384.4 408.4L256 537C250.6 542.4 241.4 542.4 236 537L107.6 408.4C103.1 403.9 100.5 397.8 100.5 391.5V391.5C100.5 385.2 103.1 379.1 107.6 374.6L242.4 292.5Z" fill="#32BCAD"/>
                  <path d="M369.5 172.5L292.5 249.5C287.1 254.9 287.1 264.2 292.5 269.5L369.5 346.5C374 351 380.1 353.6 386.4 353.6H386.4C392.7 353.6 398.8 351 403.3 346.5L530.7 219.1C536.1 213.7 536.1 204.5 530.7 199.1L403.3 71.7C398.8 67.2 392.7 64.6 386.4 64.6H386.4C380.1 64.6 374 67.2 369.5 71.7V172.5Z" fill="#32BCAD"/>
                </svg>
              </div>
              {/* Visa */}
              <div className="w-10 h-6 flex items-center justify-center bg-zinc-900 rounded">
                <span className="text-[10px] font-bold text-blue-500">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="w-10 h-6 flex items-center justify-center bg-zinc-900 rounded">
                <div className="flex">
                  <div className="w-3 h-3 rounded-full bg-red-500 -mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                </div>
              </div>
              {/* Boleto */}
              <div className="w-10 h-6 flex items-center justify-center bg-zinc-900 rounded">
                <span className="text-[8px] font-medium text-zinc-400">Boleto</span>
              </div>
            </div>
          </div>

          {/* Security Badge */}
          <div className="flex items-center gap-2 text-zinc-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <span className="text-xs">Site Seguro SSL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
