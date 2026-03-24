"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface SmoothScrollContextType {
  isReady: boolean;
  smoother: ScrollSmoother | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  isReady: false,
  smoother: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

// Enable ScrollSmoother
const ENABLE_SMOOTH_SCROLL = true;

export const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [smoother, setSmoother] = useState<ScrollSmoother | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ENABLE_SMOOTH_SCROLL) {
      const smootherInstance = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
      });

      setSmoother(smootherInstance);

      // Force refresh after smoother is created to recalculate all pins
      ScrollTrigger.refresh(true);

      // Refresh ScrollTrigger to recalculate layout after images and content load
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (contentRef.current) {
        resizeObserver.observe(contentRef.current);
      }

      // Mark as ready after a brief delay to ensure DOM is fully painted
      const readyTimeout = setTimeout(() => {
        setIsReady(true);
        // Extra refresh after marking ready
        ScrollTrigger.refresh(true);
        // Dispatch custom event for components outside the provider (like BentoGrid)
        window.dispatchEvent(new CustomEvent("smoothScrollReady"));
      }, 200);

      return () => {
        clearTimeout(readyTimeout);
        resizeObserver.disconnect();
        smootherInstance.kill();
      };
    } else {
      // Without ScrollSmoother, just mark as ready immediately
      setIsReady(true);
    }
  }, []);

  // When ScrollSmoother is disabled, render without the wrapper structure
  if (!ENABLE_SMOOTH_SCROLL) {
    return (
      <SmoothScrollContext.Provider value={{ isReady, smoother }}>
        {children}
      </SmoothScrollContext.Provider>
    );
  }

  return (
    <SmoothScrollContext.Provider value={{ isReady, smoother }}>
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>
    </SmoothScrollContext.Provider>
  );
};
