import type { UseInViewOptions, Variants } from "framer-motion";

export const FADE_IN_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const FRAMER_MOTION_OPTIONS: UseInViewOptions = {
  amount: 0.5,
  once: true,
};
