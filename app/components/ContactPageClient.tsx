"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { useEffect } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export default function ContactPageClient() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.location.hash === "#consultation-form") {
      const form = document.getElementById("consultation-form");

      if (form) {
        const top = form.getBoundingClientRect().top + window.scrollY - 24;
        window.scrollTo({ top, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }
    }
  }, [prefersReducedMotion]);

  return (
    <motion.main
      initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`${spaceGrotesk.variable} ${plexMono.variable} min-h-screen bg-[#EDEBE7] text-[#1C1B19]`}
    >
      <div className="grid min-h-screen md:grid-cols-[380px_1fr]">
        <aside className="flex flex-col justify-between bg-[#1C1B19] p-8 text-white md:p-12">
          <div>
            <Link href="/" className="text-xs font-mono tracking-[0.35em] text-white/60 transition hover:text-white">
              &larr; STRATA BUILD
            </Link>
            <h1 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
              Start your project
            </h1>
            <div className="mt-4 h-1 w-12 bg-[#EA5B0C]" />
            <p className="mt-6 leading-relaxed text-white/70">
              Tell us about the build. A site engineer will follow up within one business day.
            </p>
          </div>

          <dl className="mt-12 space-y-5 text-sm font-mono">
            <div>
              <dt className="text-xs tracking-[0.3em] text-white/40">LOCATION</dt>
              <dd className="mt-1">Thika road, Kiambu County</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.3em] text-white/40">EMAIL</dt>
              <dd className="mt-1">hello@stratabuild.co.ke</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.3em] text-white/40">RESPONSE TIME</dt>
              <dd className="mt-1">Within 1 business day</dd>
            </div>
          </dl>
        </aside>

        <section className="flex items-center p-8 md:p-16">
          <form
            id="consultation-form"
            action="https://formspree.io/f/xwvgnlwd"
            method="POST"
            className="w-full max-w-xl space-y-6"
          >
            <div>
              <label htmlFor="name" className="text-xs font-mono tracking-[0.3em] text-[#1C1B19]/50">
                FULLNAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 transition focus:border-[#EA5B0C] focus:outline-none"
                placeholder="Jane Wanjiku"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-xs font-mono tracking-[0.3em] text-[#1C1B19]">
                PHONE NUMBER
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 transition focus:border-[#EA5B0C] focus:outline-none"
                placeholder="07xxxxxxxx"
              />
            </div>

            <div>
              <label htmlFor="projectType" className="text-xs font-mono tracking-[0.3em] text-[#1C1B19]/50">
                PROJECT TYPE
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                defaultValue=""
                className="mt-2 w-full border-b-2 border-[#1C1B19]/20 bg-transparent py-2 transition focus:border-[#EA5B0C] focus:outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="residential">Residential Build</option>
                <option value="commercial">Commercial Build</option>
                <option value="reinforcement">Reinforcement/Steel fixing</option>
                <option value="consultation">Structural Consultation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-mono tracking-[0.3em] text-[#1C1B19]/50">
                PROJECT DETAILS
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-none border-b-2 border-[#1C1B19]/20 bg-transparent py-2 transition focus:border-[#EA5B0C] focus:outline-none"
                placeholder="location, approximate scope and timeline"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[#EA5B0C] px-8 py-3 font-semibold text-white transition hover:bg-[#d14f09]"
            >
              Send Request
            </button>
          </form>
        </section>
      </div>
    </motion.main>
  );
}
