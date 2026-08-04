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

type ProcessProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const steps = [
  {
    title: "Planning",
    detail: "Detailed review of structural requirements, sequencing and delivery priorities.",
  },
  {
    title: "Execution",
    detail: "Precise reinforcement installation, inspection and coordination on site.",
  },
  {
    title: "Delivery",
    detail: "Final quality review and handover with full confidence in the finished structure.",
  },
];

export default function Process({ onNext, onPrevious }: ProcessProps) {
  return (
    <section
      className={`flex h-full w-full items-center justify-center bg-[#EDEBE7] px-6 py-8 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <div className="relative w-full max-w-7xl rounded-[2rem] border border-[#1C1B19]/10 bg-[#F8F4EE] p-8 shadow-[0_20px_60px_rgba(28,27,25,0.08)] sm:p-10 lg:p-14">
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <div className="max-w-2xl">
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
            OUR PROCESS
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl">
            A disciplined path from planning through completion.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.4rem] border border-[#1C1B19]/10 bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#EA5B0C]">
                0{index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#1C1B19]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#1C1B19]/70">{step.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <button
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-3 rounded-full border border-[#EA5B0C]/20 bg-[#EA5B0C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            Why Choose Us
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
