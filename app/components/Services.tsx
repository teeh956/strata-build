"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import BackButton from "./navigation/BackButton";

type ServicesProps = {
  onNext?: () => void;
  onPrevious?: () => void;
};

const services = [
  {
    title: "Reinforced Concrete Works",
    description:
      "From foundation preparation to concrete placement, we deliver reinforced concrete structures engineered for maximum strength, durability and long-term performance.",
    image: "/images/service-concrete.png",
    alt: "Professional reinforced concrete construction project with steel reinforcement prepared for concrete placement.",
  },
  {
    title: "Steel Fixing",
    description:
      "Accurate cutting, bending and fixing of reinforcement steel carried out to structural drawings, ensuring every element meets engineering specifications before concrete placement.",
    image: "/images/service-steel-fixing.png",
    alt: "Black structural steel fixers tying reinforcement bars for a reinforced concrete slab.",
  },
  {
    title: "Slab Reinforcement",
    description:
      "Precision reinforcement layouts for suspended and ground slabs designed to distribute structural loads safely while improving durability and crack resistance.",
    image: "/images/service-slab-reinforcement.png",
    alt: "Large reinforced concrete slab with professionally tied reinforcement mesh before concrete placement.",
  },
  {
    title: "Column Reinforcement",
    description:
      "Engineered reinforcement cages assembled with precise bar spacing and secure ties to ensure maximum structural stability and vertical load capacity.",
    image: "/images/service-column-reinforcement.png",
    alt: "Black engineers inspecting reinforced concrete column cages before construction.",
  },
  {
    title: "Beam Reinforcement",
    description:
      "Structural beam reinforcement installed according to approved engineering drawings to maximise strength, stiffness and long-term structural integrity.",
    image: "/images/service-beam-reinforcement.png",
    alt: "Reinforced concrete beam with accurately positioned steel reinforcement before casting.",
  },
  {
    title: "Residential Construction",
    description:
      "Reliable reinforcement solutions for homes, apartments and private developments built with the same engineering standards used on commercial projects.",
    image: "/images/service-residential.png",
    alt: "Modern residential construction project featuring reinforced concrete structural work.",
  },
  {
    title: "Commercial Construction",
    description:
      "Large-scale reinforcement systems for offices, retail developments, warehouses and multi-storey commercial buildings requiring precision engineering.",
    image: "/images/service-commercial.png",
    alt: "Commercial reinforced concrete building under construction with structural reinforcement in progress.",
  },
  {
    title: "Reinforcement Detailing",
    description:
      "Comprehensive reinforcement detailing and bar scheduling that transforms engineering designs into clear, build-ready construction documentation.",
    image: "/images/service-detailing.png",
    alt: "Engineer reviewing structural reinforcement drawings and reinforcement detailing documents.",
  },
  {
    title: "Structural Consultation",
    description:
      "Professional structural guidance before construction begins, helping clients optimise reinforcement design, construction planning and project execution.",
    image: "/images/service-consultation.png",
    alt: "Black structural engineer consulting with a client beside a reinforced concrete construction project.",
  },
  {
    title: "Site Supervision",
    description:
      "Continuous on-site quality inspections ensuring reinforcement installation, workmanship and construction practices meet engineering specifications at every stage.",
    image: "/images/service-site-supervision.png",
    alt: "Black site engineer supervising reinforcement installation on an active construction project.",
  },
];

export default function Services({ onNext, onPrevious }: ServicesProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioningIndex, setTransitioningIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionStage, setTransitionStage] = useState<"idle" | "exiting" | "entering">("idle");
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({ 0: true });
  const transitionTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isTransitioning) {
      return;
    }

    const timer = window.setTimeout(() => {
      setTransitioningIndex(null);
      setIsTransitioning(false);
      setTransitionStage("idle");
    }, 600);

    transitionTimerRef.current = timer;

    return () => window.clearTimeout(timer);
  }, [isTransitioning]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const handleSelect = (index: number) => {
    if (index === activeIndex) {
      return;
    }

    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
    }

    setTransitioningIndex(activeIndex);
    setActiveIndex(index);
    setIsTransitioning(true);
    setTransitionStage("exiting");

    window.setTimeout(() => {
      setTransitionStage("entering");
    }, 30);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect(index);
    }
  };

  return (
    <section
      id="services"
      className="min-h-screen w-full bg-[#EDEBE7] px-6 py-16 sm:px-8 lg:px-16 xl:px-24"
    >
      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col">
        <div className="absolute left-4 top-4 z-10 sm:left-6 sm:top-6">
          <BackButton onClick={onPrevious} />
        </div>
        <motion.header
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-[#EA5B0C]">
            OUR SERVICES
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#1C1B19] sm:text-4xl lg:text-[2.6rem]">
            Engineering Solutions Built for Strength, Precision and Longevity.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#1C1B19]/75 sm:text-lg">
            From reinforcement detailing to complete structural steel fixing, we deliver dependable
            construction solutions that meet the highest standards of quality, safety and
            engineering excellence.
          </p>
        </motion.header>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            const isEnteringCard = isTransitioning && index === activeIndex;
            const isLeavingCard = isTransitioning && index === transitioningIndex;
            const imageTransitionClass = isLeavingCard
              ? "opacity-0 scale-[0.97]"
              : isEnteringCard
                ? transitionStage === "entering"
                  ? "opacity-100 scale-[1]"
                  : "opacity-0 scale-[0.97]"
                : isActive
                  ? "opacity-100 scale-[1]"
                  : "opacity-0 scale-[0.97]";

            return (
              <motion.article
                key={service.title}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                onClick={() => handleSelect(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={shouldReduceMotion ? undefined : { y: -4, scale: 1.005 }}
                className={`group flex h-full flex-col overflow-hidden rounded-[1.6rem] border bg-[#F7F4EE] shadow-[0_18px_45px_rgba(28,27,25,0.08)] transition-[box-shadow,border-color] duration-300 ease-out hover:shadow-[0_22px_56px_rgba(28,27,25,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA5B0C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EDEBE7] ${
                  isActive
                    ? "scale-[1.02] border-[#EA5B0C] shadow-[0_24px_60px_rgba(28,27,25,0.16)]"
                    : "border-[#1C1B19]/10"
                }`}
              >
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.7, delay: shouldReduceMotion ? 0 : index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/3] overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      onLoad={() => setLoadedImages((current) => ({ ...current, [index]: true }))}
                      className={`h-full w-full object-cover transition-[transform,opacity,filter] duration-[600ms] ease-out group-hover:scale-[1.03] group-hover:brightness-[1.03] ${
                        loadedImages[index] ? "opacity-100" : "opacity-0"
                      } ${imageTransitionClass}`}
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/50 via-transparent to-[#1C1B19]/10" />
                </motion.div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-[#1C1B19]">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-[#1C1B19]/70">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#EA5B0C] transition-colors duration-300 group-hover:text-[#1C1B19]"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleSelect(index);
                      }}
                    >
                      Learn More
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.button
            whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            type="button"
            onClick={onNext}
            className="group inline-flex items-center gap-3 rounded-full border border-[#EA5B0C]/20 bg-[#EA5B0C] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(234,91,12,0.24)]"
          >
            View Our Recent Projects
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
