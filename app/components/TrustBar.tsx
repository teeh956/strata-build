"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { useEffect, useState } from "react";
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

type TrustBarProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Safety Commitment" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function TrustBar({ onNext, onPrevious }: TrustBarProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full bg-[#EDEBE7] px-6 py-16 sm:px-8 lg:px-16 xl:px-24"
    >
      <div
        className={`relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-[#1C1B19]/10 bg-[#EDEBE7] shadow-[0_25px_80px_rgba(28,27,25,0.08)] lg:flex-row ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      >
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
          whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[320px] overflow-hidden lg:min-h-full lg:w-[46%]"
        >
          <Image
            src="/images/hero-block-walls-ppe.png"
            alt="Reinforcement layout inspected with precision before concrete placement"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C1B19]/15 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-14 xl:p-16"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.36em] text-[#EA5B0C]">
            Why Clients Trust Strata Build
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl lg:text-[2.55rem]">
            Building Confidence Before Concrete Is Even Poured.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#1C1B19]/75 sm:text-lg">
            Every reinforcement layout is measured, tied and inspected before concrete placement,
            ensuring precision, safety and lasting structural integrity on every project.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <motion.li
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[1.25rem] border border-[#1C1B19]/10 bg-white p-4 shadow-[0_10px_30px_rgba(28,27,25,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(28,27,25,0.12)]"
              >
                <AnimatedValue value={stat.value} reducedMotion={shouldReduceMotion} />
                <p className="mt-2 text-sm leading-6 text-[#1C1B19]/70">
                  {stat.label}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.button
            type="button"
            onClick={onNext}
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#1C1B19]/10 bg-[#EA5B0C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            Explore Our Services
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

function AnimatedValue({ value, reducedMotion }: { value: string; reducedMotion: boolean }) {
  const [display, setDisplay] = useState(0);
  const target = Number.parseInt(value.replace(/[^\d]/g, ""), 10);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(target);
      return;
    }

    let frame = 0;
    const totalFrames = 20;
    const step = target / totalFrames;

    const timer = window.setInterval(() => {
      frame += 1;
      setDisplay(Math.min(Math.round(step * frame), target));
      if (frame >= totalFrames) {
        window.clearInterval(timer);
      }
    }, 70);

    return () => window.clearInterval(timer);
  }, [reducedMotion, target]);

  return <div className="text-2xl font-semibold text-[#EA5B0C] sm:text-3xl">{`${display}${value.includes("+") ? "+" : value.includes("%") ? "%" : ""}`}</div>;
}
