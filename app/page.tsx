"use client";

import Image from "next/image";
import { useState } from "react";
import ContactCta from "./components/ContactCta";
import Process from "./components/Process";
import Projects from "./components/Projects";
import RequestConsultationCTA from "./components/RequestConsultationCTA";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";

type HeroProps = {
  onNext?: () => void;
};

function Hero({ onNext }: HeroProps) {
  const handleExploreTrust = () => {
    onNext?.();
  };

  return (
    <section className="relative h-screen w-full">
      <div className="relative h-full w-full">
        <Image
          src="/images/hero-rebar-worker.png"
          alt="Precision steel reinforcement for stronger structures"
          className="object-cover"
          fill
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute bottom-8 left-4 right-4 max-w-xl text-white sm:bottom-16 sm:left-6 sm:right-auto md:left-16">
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
          Precision Steel Reinforcement for Stronger Structures
        </h1>
        <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg md:text-xl">
          We specialise in professional steel fixing, reinforcement detailing and reinforced concrete works that form the structural backbone of residential, commercial and industrial buildings.
        </p>

        <button
          type="button"
          onClick={handleExploreTrust}
          className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-orange-700 sm:mt-8 sm:w-fit sm:justify-start sm:px-8 sm:py-4 sm:text-base"
        >
          Explore Trust
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 9;

  const goToNextStep = () => setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  const goToPreviousStep = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  const steps = [
    {
      key: "hero",
      component: <Hero onNext={goToNextStep} />,
    },
    {
      key: "trust",
      component: <TrustBar onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "services",
      component: <Services onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "projects",
      component: <Projects onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "process",
      component: <Process onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "why-choose-us",
      component: <WhyChooseUs onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "testimonials",
      component: <Testimonials onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "contact",
      component: <ContactCta onNext={goToNextStep} onPrevious={goToPreviousStep} />,
    },
    {
      key: "consultation-cta",
      component: <RequestConsultationCTA />,
    },
  ];

  const currentSection = steps[currentStep] ?? steps[0];

  return (
    <main className="min-h-screen bg-white">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1C1B19]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-white/80 sm:px-8 lg:px-16 xl:px-24">
          <span className="font-semibold uppercase tracking-[0.3em] text-white">Strata Build</span>
          <span className="text-white/70">Step {currentStep + 1} / {totalSteps}</span>
        </div>
      </div>

      <div className="pt-16">
        <div className="min-h-[calc(100vh-4rem)] transition-all duration-500 ease-out animate-[fadeIn_0.45s_ease-out]">
          {currentSection.component}
        </div>
      </div>
    </main>
  );
}