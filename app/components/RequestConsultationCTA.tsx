"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
});

type RequestConsultationCTAProps = {
  className?: string;
};

export default function RequestConsultationCTA({ className = "" }: RequestConsultationCTAProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isNavigating, setIsNavigating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleRequestConsultation = () => {
    if (typeof window === "undefined") {
      return;
    }

    const destination = "/contact#consultation-form";

    if (prefersReducedMotion) {
      window.location.assign(destination);
      return;
    }

    setIsNavigating(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    timeoutRef.current = window.setTimeout(() => {
      window.location.assign(destination);
    }, 220);
  };

  return (
    <motion.section
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      animate={isNavigating ? { opacity: 0, y: 12 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={`flex min-h-screen w-full items-center justify-center bg-[#EDEBE7] px-6 py-24 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable} ${className}`}
    >
      <div className="mx-auto flex max-w-[700px] flex-col items-center text-center">
        <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
          READY TO BUILD?
        </p>

        <h2 className="mt-6 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl lg:text-[3rem]">
          Let&apos;s Discuss Your Project.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-[#1C1B19]/75 sm:text-lg">
          Whether you&apos;re planning a residential home, commercial development, structural reinforcement,
          or site supervision, our engineers are ready to review your project and recommend the best
          construction approach.
        </p>

        <motion.button
          type="button"
          onClick={handleRequestConsultation}
          aria-label="Request site consultation"
          whileHover={prefersReducedMotion ? undefined : { y: -4, scale: 1.01 }}
          whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="group mt-10 inline-flex h-[3.75rem] items-center justify-center rounded-[1rem] bg-[#EA5B0C] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(234,91,12,0.2)] transition-all duration-300 hover:bg-[#d3540b] hover:shadow-[0_18px_40px_rgba(234,91,12,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEBE7]"
        >
          <span>Request Site Consultation</span>
          <ArrowRight className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-[6px]" />
        </motion.button>
      </div>
    </motion.section>
  );
}
