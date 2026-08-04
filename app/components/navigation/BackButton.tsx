"use client";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

type BackButtonProps = {
  onClick?: () => void;
  className?: string;
};

export default function BackButton({ onClick, className = "" }: BackButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go back"
      className={`group inline-flex items-center gap-2 rounded-[0.75rem] border border-[rgba(28,27,25,0.15)] bg-transparent px-[1.125rem] py-[0.75rem] text-sm font-medium text-[#1C1B19] transition-all duration-250 ease-out hover:border-[#EA5B0C] hover:bg-[rgba(0,0,0,0.04)] hover:text-[#EA5B0C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F4EE] active:scale-[0.98] ${spaceGrotesk.variable} ${className}`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <span aria-hidden="true" className="text-base leading-none">
        ←
      </span>
      <span>Back</span>
    </button>
  );
}
