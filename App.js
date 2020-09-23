import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import styled, { ThemeProvider } from "styled-components";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cover from "./Pages/Cover";
import Footer from "./Pages/Footer";
import Headline from "./Pages/Headline";
import ProjectOverview from "./Pages/ProjectOverview";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import "./styles.css";

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
  max-width: 100%;
  width: 100%;
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
  max-width: 100% !important;
  width: 100% !important;
  margin: 0;
  padding: 0;
`;

export default App;
