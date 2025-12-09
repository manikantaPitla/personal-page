import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { FADE_IN_VARIANTS, FRAMER_MOTION_OPTIONS } from "../constants/animationsConstants";

// Reusable fade-in animation component
export const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, FRAMER_MOTION_OPTIONS);

  return (
    <motion.div ref={ref} variants={FADE_IN_VARIANTS} initial="hidden" animate={isInView ? "visible" : "hidden"}>
      {children}
    </motion.div>
  );
};
