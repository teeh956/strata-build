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

type WhyChooseUsProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const points = [
  "Experienced structural teams with a strong site-first approach.",
  "Detail-driven execution that protects schedule, safety and quality.",
  "Trusted partnerships built on reliability and clear communication.",
];

export default function WhyChooseUs({ onNext, onPrevious }: WhyChooseUsProps) {
  return (
    <section
      className={`flex h-full w-full items-center justify-center bg-[#F7F4EE] px-6 py-8 sm:px-8 lg:px-16 xl:px-24 ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <div className="relative w-full max-w-7xl rounded-[2rem] border border-[#1C1B19]/10 bg-[#EDEBE7] p-8 shadow-[0_20px_60px_rgba(28,27,25,0.08)] sm:p-10 lg:p-14">
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <div className="max-w-3xl">
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
            WHY CHOOSE US
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl">
            We bring calm precision to complex structural demands.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#1C1B19]/75 sm:text-lg">
            Every project benefits from a practical, engineering-led approach that prioritises performance, clarity and dependable delivery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((point) => (
            <div key={point} className="rounded-[1.4rem] border border-[#1C1B19]/10 bg-white p-6">
              <p className="text-sm leading-7 text-[#1C1B19]/75">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-start">
          <button
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-3 rounded-full border border-[#1C1B19]/10 bg-[#EA5B0C] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            Client Testimonials
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
