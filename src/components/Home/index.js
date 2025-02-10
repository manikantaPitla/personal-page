import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "../Navigation";
import {
  MainContentWrapper,
  MiddleContentWrapper,
  SideContentWrapper,
} from "./style";
import About from "../About";
import Skills from "../Skills";
import Education from "../Education";
import Projects from "../Projects";
import Introduction from "../Introduction";
import Footer from "../Footer";
import Contact from "../Contact";
import SocialLinks from "../../utils/uiComponents/SocialLinks";
import GitHub from "../GitHub";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const SectionWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

function Home() {
  return (
    <>
      <Navigation />
      <MainContentWrapper>
        <SideContentWrapper>
          <SocialLinks />
          <hr />
        </SideContentWrapper>

        <MiddleContentWrapper>
          <SectionWrapper>
            <Introduction />
          </SectionWrapper>
          <SectionWrapper>
            <About />
          </SectionWrapper>
          <SectionWrapper>
            <Education />
          </SectionWrapper>
          <SectionWrapper>
            <Skills />
          </SectionWrapper>
          <SectionWrapper>
            <GitHub />
          </SectionWrapper>
          <SectionWrapper>
            <Projects />
          </SectionWrapper>
          <SectionWrapper>
            <Contact />
          </SectionWrapper>

          <hr />
          <Footer />
        </MiddleContentWrapper>

        <SideContentWrapper>
          <p>pitlamanikanta81@gmail.com</p>
          <hr />
        </SideContentWrapper>
      </MainContentWrapper>
    </>
  );
}

export default Home;
