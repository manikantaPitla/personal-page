import React from "react";
import Navigation from "../Navigation";
import { MainContentWrapper, MiddleContentWrapper, SideContentWrapper } from "./style";
import About from "../About";
import Skills from "../Skills";
import Education from "../Education";
import Projects from "../Projects";
import Introduction from "../Introduction";
import Footer from "../Footer";
import Contact from "../Contact";
import SocialLinks from "../../components/SocialLinks";
import GitHub from "../GitHub";
import { SectionWrapper } from "../../animations/fadeInAnimation";
import { PROFILE_DATA } from "../../constants/profileData";

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
          <p>
            <a href={`mailto:${PROFILE_DATA.email}`} style={{ color: "inherit", textDecoration: "none" }}>
              {PROFILE_DATA.email}
            </a>
          </p>
          <hr />
        </SideContentWrapper>
      </MainContentWrapper>
    </>
  );
}

export default Home;
