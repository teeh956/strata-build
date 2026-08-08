"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

type FooterProps = {
  onNavigateToStep?: (stepIndex: number) => void;
};

function LogoContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex h-14 w-36 items-center justify-start sm:justify-start">{children}</div>;
}

export default function Footer({ onNavigateToStep }: FooterProps) {
  const shouldReduceMotion = useReducedMotion();

  const linkItems = [
    { label: "Home", stepIndex: 0 },
    { label: "About", stepIndex: 5 },
    { label: "Services", stepIndex: 2 },
    { label: "Projects", stepIndex: 3 },
    { label: "Contact", stepIndex: 7 },
  ];

  return (
    <motion.footer
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-white/10 bg-[#1C1B19] text-[#F5F3EF]"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-8 lg:px-16 xl:px-24">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <FooterColumn title="">
            <LogoContainer>
              <Image
                src="/images/logo.png"
                alt="Strata Build Logo"
                width={144}
                height={56}
                className="h-auto w-full object-contain"
                priority={false}
              />
            </LogoContainer>
            <div className="space-y-4 text-sm leading-7 text-[#F5F3EF]/80">
              <p className="font-medium text-[#F5F3EF]">Precision in Every Structure</p>
              <p>
                Building stronger foundations through expert reinforcement, structural consultation and premium concrete construction solutions across Kenya.
              </p>
            </div>
          </FooterColumn>

          <FooterColumn title="Quick Links">
            <FooterLinks
              items={linkItems.map((item) => ({
                label: item.label,
                onClick: () => onNavigateToStep?.(item.stepIndex),
              }))}
            />
          </FooterColumn>

          <FooterColumn title="Our Services">
            <ul className="space-y-3 text-sm text-[#F5F3EF]/80">
              {[
                "Reinforced Concrete Works",
                "Steel Fixing",
                "Slab Reinforcement",
                "Beam Reinforcement",
                "Column Reinforcement",
                "Reinforcement Detailing",
                "Structural Consultation",
                "Site Supervision",
              ].map((service) => (
                <li key={service} className="transition-colors duration-250 ease-out hover:text-[#EA5B0C]">
                  {service}
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <FooterContact />
          </FooterColumn>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col gap-4 border-t border-white/10 pt-4 text-sm text-[#F5F3EF]/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Strata Build.
            <span className="mt-1 block sm:mt-0 sm:ml-1 sm:inline">All Rights Reserved.</span>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <button type="button" className="text-left transition-colors duration-250 ease-out hover:text-[#EA5B0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1B19]">
              Privacy Policy
            </button>
            <button type="button" className="text-left transition-colors duration-250 ease-out hover:text-[#EA5B0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1B19]">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
