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

type TestimonialsProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const testimonials = [
  {
    quote: "The team delivered with genuine care for detail and quality from day one.",
    author: "— Project Director, Northview",
  },
  {
    quote: "Reliable, professional and calm under pressure — exactly what we needed.",
    author: "— Site Manager, Harbour Hub",
  },
];

export default function Testimonials({ onNext, onPrevious }: TestimonialsProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className={`flex h-full w-full items-center justify-center bg-[#EDEBE7] px-6 py-8 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <div className="relative w-full max-w-7xl rounded-[2rem] border border-[#1C1B19]/10 bg-white p-8 shadow-[0_20px_60px_rgba(28,27,25,0.08)] sm:p-10 lg:p-14">
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
            CLIENT TESTIMONIALS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl">
            Trusted by clients who value precision and consistency.
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[1.4rem] border border-[#1C1B19]/10 bg-[#F7F4EE] p-6"
            >
              <p className="text-lg leading-8 text-[#1C1B19]/80">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#EA5B0C]">
                {testimonial.author}
              </p>
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
