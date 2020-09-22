import React, { useState } from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Cover from "./Pages/Cover";
import Headline from "./Pages/Headline";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Footer from "./Pages/Footer";
import ProjectOverview from "./Pages/ProjectOverview";
import { CSSTransition } from "react-transition-group";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import {withRouter} from 'react-router-dom'


const theme = {
  goldAccent: "#deb150",
  whiteText: "white",
  blackText: "black",
  dark: "black",
  brightBg: "#e91e63",
  veryLightGray: "#e8e8e8",
};

const App = () => {
  const [showProject, setShowProject] = useState(false);
  const [activeProject, setActiveProject] = useState("");
  const [showLanding, setShowLanding] = useState(true);

  const toggleShowProject = (projectName) => {
    if (projectName === "") {
      setShowProject(false);
      setActiveProject(projectName);
      setShowLanding(true);
    } else {
      setShowProject(true);
      setActiveProject(projectName);
      setShowLanding(false);
    }
  };

  const closeProject = () => {
    setShowProject(false);
  };

  const closeLanding = () => {
    setShowLanding(false);
    scroll.scrollToTop();
  };

  return (
    <GlobalStyles>
      <ThemeProvider theme={theme}>
        <Wrapper id="containerElement">
          {showLanding && (
            <>
              {/* <Navbar /> */}
              <Cover />
              <Headline />
              <Projects toggleShowProject={toggleShowProject} />
              <Skills />
              <About />
              <Contact />
              <Footer />
            </>
          )}
          <CSSTransition
            in={showProject}
            timeout={500}
            classNames="grow"
            unmountOnExit
            onEnter={() => closeLanding()}
            onExited={() => setShowLanding(true)}
          >
            <ProjectOverview
              id={activeProject}
              toggleShowProject={closeProject}
            ></ProjectOverview>
          </CSSTransition>
        </Wrapper>
      </ThemeProvider>
    </GlobalStyles>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  width: 100vw;
  overflow-x: hidden !important;
  margin: 0;
  min-height: 100vh;
  background: #e91e63;
`;

const GlobalStyles = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: white;
  max-width: 100vw !important;
  width: 100vw !important;
  margin: 0;

  &&& {
    max-width: 98.7vw;
    width: 98.7vw;
    margin: 0;
    padding: 0;
  }
`;

export default App;
