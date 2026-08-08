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

type ProjectsProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const projects = [
  {
    title: "Northview Residences",
    detail: "High-precision reinforcement for a four-storey private development.",
  },
  {
    title: "Harbour Commercial Hub",
    detail: "Complex steel fixing sequence delivered with zero compromise on safety.",
  },
  {
    title: "Cedar Bridge Works",
    detail: "Structural detailing and concrete coordination for a demanding civic build.",
  },
];

export default function Projects({ onNext, onPrevious }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`flex h-full w-full items-center justify-center bg-[#F7F4EE] px-6 py-8 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <div className="relative w-full max-w-7xl rounded-[2rem] border border-[#1C1B19]/10 bg-white/80 p-8 shadow-[0_20px_60px_rgba(28,27,25,0.08)] backdrop-blur sm:p-10 lg:p-14">
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
            RECENT PROJECTS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl">
            Built to last, delivered with discipline and care.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#1C1B19]/75 sm:text-lg">
            From private residences to complex commercial infrastructure, our projects reflect the same commitment to structural integrity and precision execution.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.005 }}
              className="rounded-[1.4rem] border border-[#1C1B19]/10 bg-[#F8F4EE] p-6"
            >
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
                whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="h-28 rounded-[1rem] bg-gradient-to-br from-[#EA5B0C]/20 via-[#EA5B0C]/5 to-transparent"
              />
              <h3 className="mt-5 text-xl font-semibold text-[#1C1B19]">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#1C1B19]/70">{project.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-3 rounded-full border border-[#1C1B19]/10 bg-[#EA5B0C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            Our Process
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
