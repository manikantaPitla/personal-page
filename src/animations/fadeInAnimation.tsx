import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";
import { FADE_IN_VARIANTS, FRAMER_MOTION_OPTIONS } from "../constants";

// Reusable fade-in animation component
export const SectionWrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, FRAMER_MOTION_OPTIONS);

  return (
    <motion.div ref={ref} variants={FADE_IN_VARIANTS} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
};
