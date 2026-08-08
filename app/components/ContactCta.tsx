"use client";

import { motion, useReducedMotion } from "framer-motion";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import BackButton from "./navigation/BackButton";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

type ContactCtaProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

export default function ContactCta({ onNext, onPrevious }: ContactCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`flex h-full w-full items-center justify-center bg-[#1C1B19] px-6 py-8 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <div className="relative w-full max-w-6xl rounded-[2rem] border border-white/10 bg-[#252321] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.2)] sm:p-10 lg:p-14">
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
            READY TO BUILD
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl">
            Let’s discuss the structural strength and precision your next project deserves.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Reach out for expert reinforcement solutions, structural consultation and dependable delivery from the first conversation to final handover.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-start">
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-3 rounded-full border border-[#EA5B0C]/20 bg-[#EA5B0C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            Request Site Consultation
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
