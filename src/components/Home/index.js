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
          <Introduction />
          <About />
          <Education />
          <Skills />
          <GitHub />
          <Projects />
          <Contact />
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
