"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactCta from "./components/ContactCta";
import { default as Footer } from "./components/footer/Footer";
import Process from "./components/Process";
import Projects from "./components/Projects";
import RequestConsultationCTA from "./components/RequestConsultationCTA";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";
import {
  heroBackgroundVariants,
  heroContentVariants,
  heroCtaVariants,
  heroHeadlineLineVariants,
  heroImageVariants,
  heroParagraphVariants,
  heroSectionVariants,
} from "./lib/heroMotion";

type HeroProps = {
  onNext?: () => void;
};

function Hero({ onNext, shouldAnimate = true }: HeroProps & { shouldAnimate?: boolean }) {
  const shouldReduceMotion = useReducedMotion();
  const headlineLines = ["Precision Steel Reinforcement", "for Stronger Structures"];

  const handleExploreTrust = () => {
    onNext?.();
  };

  return (
    <motion.section
      initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
      animate={shouldReduceMotion || !shouldAnimate ? "visible" : "visible"}
      variants={heroSectionVariants(shouldReduceMotion ?? false)}
      className="relative isolate min-h-[85vh] w-full overflow-hidden sm:min-h-[90vh] lg:min-h-screen"
    >
      <motion.div initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"} animate="visible" variants={heroBackgroundVariants(shouldReduceMotion ?? false)} className="absolute inset-0">
        <motion.div
          initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
          animate="visible"
          variants={heroImageVariants(shouldReduceMotion ?? false)}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          transition={{ duration: 8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-rebar-worker.png"
            alt="Precision steel reinforcement for stronger structures"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_25%] sm:object-[center_30%] lg:object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[85vh] w-full max-w-[1280px] items-center px-6 py-16 sm:min-h-[90vh] sm:px-8 lg:min-h-screen lg:px-12 xl:px-16">
        <motion.div
          initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
          animate="visible"
          variants={heroContentVariants(shouldReduceMotion ?? false)}
          className="w-full max-w-2xl text-center text-white sm:text-left md:w-[60%] lg:w-[45%] lg:max-w-[40rem]"
        >
          <motion.p
            initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
            animate="visible"
            variants={heroParagraphVariants(shouldReduceMotion ?? false)}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300"
          >
            Strata Build
          </motion.p>

          <h1 className="text-4xl font-bold leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            {headlineLines.map((line, index) => (
              <motion.span
                key={line}
                initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
                animate="visible"
                variants={heroHeadlineLineVariants(shouldReduceMotion ?? false)}
                transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : 0.1 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2 block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
            animate="visible"
            variants={heroParagraphVariants(shouldReduceMotion ?? false)}
            className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/90 sm:mx-0 sm:text-lg lg:text-xl"
          >
            We specialise in professional steel fixing, reinforcement detailing and reinforced concrete works that form the structural backbone of residential, commercial and industrial buildings.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
            animate="visible"
            variants={heroContentVariants(shouldReduceMotion ?? false)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <motion.button
              type="button"
              onClick={handleExploreTrust}
              initial={shouldReduceMotion || !shouldAnimate ? false : "hidden"}
              animate="visible"
              variants={heroCtaVariants(shouldReduceMotion ?? false)}
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01, backgroundColor: "#d14f09" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="group inline-flex h-14 w-full items-center justify-center rounded-md bg-orange-600 px-6 text-base font-semibold text-white transition-colors duration-250 ease-out hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 sm:w-auto sm:min-w-[12rem]"
            >
              <span className="transition-transform duration-250 ease-out group-hover:translate-x-[6px]">
                Explore Trust
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

    </motion.section>
  );
}

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [hasShownHero, setHasShownHero] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      key: "hero",
      component: <Hero onNext={goToNextStep} shouldAnimate={!hasShownHero} />,
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

  const totalSteps = steps.length;

  function goToNextStep() {
    setCurrentStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  }

  function goToPreviousStep() {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }

  useEffect(() => {
    if (!hasShownHero && currentStep === 0) {
      setHasShownHero(true);
    }
  }, [currentStep, hasShownHero]);

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
        <motion.div
          key={currentSection.key}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[calc(100vh-4rem)]"
        >
          {currentSection.component}
        </motion.div>
      </div>

      <Footer onNavigateToStep={setCurrentStep} />
    </main>
  );
}