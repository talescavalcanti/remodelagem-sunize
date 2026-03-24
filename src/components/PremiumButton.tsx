"use client";

import React, { useRef } from "react";
import gsap from "gsap";

interface PremiumButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const PremiumButton = ({ children, className = "", onClick }: PremiumButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const handleMouseEnter = () => {
    if (!btnRef.current || !fillRef.current || !textRef.current) return;

    gsap.to(fillRef.current, {
      scaleY: 1,
      duration: 0.5,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      color: "#0b0e14",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(btnRef.current, {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(255, 138, 76, 0.4)",
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current || !fillRef.current || !textRef.current) return;

    gsap.to(fillRef.current, {
      scaleY: 0,
      duration: 0.5,
      ease: "power3.inOut",
    });

    gsap.to(textRef.current, {
      color: "#ff8a4c",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(btnRef.current, {
      scale: 1,
      boxShadow: "0 0px 0px 0px rgba(255, 138, 76, 0)",
      duration: 0.5,
      ease: "power3.inOut",
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden bg-surface-container-lowest border-2 border-primary-container rounded-full px-10 py-4 cursor-pointer focus:outline-none flex items-center justify-center font-body ${className}`}
    >
      <span
        ref={fillRef}
        className="absolute inset-0 bg-primary-container origin-bottom block"
        style={{ transform: "scaleY(0)" }}
      />
      <span
        ref={textRef}
        className="relative z-10 font-semibold text-lg tracking-wide text-primary-container"
      >
        {children}
      </span>
    </button>
  );
};
