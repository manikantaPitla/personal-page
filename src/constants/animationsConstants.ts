// Animation variants and constants
export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const FRAMER_MOTION_OPTIONS = {
  threshold: 0.5,
  triggerOnce: true,
};
