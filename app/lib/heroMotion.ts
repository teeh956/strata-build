import type { Variants } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const heroSectionVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.5,
      ease: easeOut,
    },
  },
});

export const heroBackgroundVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      ease: easeOut,
    },
  },
});

export const heroImageVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.9,
      delay: reducedMotion ? 0 : 0.1,
      ease: easeOut,
    },
  },
});

export const heroContentVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      ease: easeOut,
    },
  },
});

export const heroHeadlineLineVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      ease: easeOut,
    },
  },
});

export const heroParagraphVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reducedMotion ? 0 : 0.5,
      delay: reducedMotion ? 0 : 0.15,
      ease: easeOut,
    },
  },
});

export const heroCtaVariants = (reducedMotion: boolean): Variants => ({
  hidden: { opacity: 0, y: 15, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0 : 0.4,
      delay: reducedMotion ? 0 : 0.2,
      ease: easeOut,
    },
  },
});

export const createRevealVariants = (
  reducedMotion: boolean,
  options?: { y?: number; duration?: number; delay?: number; scale?: number }
): Variants => ({
  hidden: {
    opacity: 0,
    y: options?.y ?? 24,
    scale: options?.scale ?? 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0 : options?.duration ?? 0.6,
      delay: reducedMotion ? 0 : options?.delay ?? 0,
      ease: easeOut,
    },
  },
});

export const createImageRevealVariants = (
  reducedMotion: boolean,
  options?: { duration?: number; delay?: number }
): Variants => ({
  hidden: { opacity: 0, scale: 1.02 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: reducedMotion ? 0 : options?.duration ?? 0.7,
      delay: reducedMotion ? 0 : options?.delay ?? 0,
      ease: easeOut,
    },
  },
});
