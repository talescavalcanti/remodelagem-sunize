"use client";

import React from "react";

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  className?: string;
  orbitBorder?: boolean;
}

export const AnimatedButton = ({
  children,
  variant = "primary",
  className = "",
  orbitBorder = false,
}: AnimatedButtonProps) => {
  const variants = {
    primary: "primary-gradient text-on-primary shadow-2xl shadow-primary-container/30",
    secondary: "bg-surface-variant/20 border border-outline-variant/30 text-on-surface hover:bg-primary-container hover:text-on-primary",
    inverted: "bg-surface-container-lowest text-primary-container shadow-xl",
  };

  const iconBg = {
    primary: "bg-surface-container-lowest text-primary-container",
    secondary: "bg-primary-container text-on-primary",
    inverted: "bg-primary-container text-on-primary",
  };

  return (
    <button className={`relative font-body text-lg font-black rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-700 ease-in-out hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer flex items-center justify-center border-none ${variants[variant]} ${className}`}>
      {orbitBorder && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            rx="23"
            style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)' }}
            fill="none"
            stroke="rgba(0,0,0,0.85)"
            strokeWidth="2"
          />
        </svg>
      )}
      <span className="relative z-10 transition-all duration-700 ease-in-out whitespace-nowrap">
        {children}
      </span>
      <div className={`absolute right-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out group-hover:right-[calc(100%-44px)] group-hover:rotate-45 ${iconBg[variant]} z-10`}>
        <span className="material-symbols-outlined text-xl">arrow_outward</span>
      </div>
    </button>
  );
};
