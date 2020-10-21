import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { LoadingSplashScreen } from './Components'
import { Expertise, FeaturedProjects } from './Pages'
import Cover from './Pages/Cover'
import Footer from './Pages/Footer'
import './styles.css'
import { Controller, Scene } from 'react-scrollmagic'

const theme = {
  goldAccent: '#deb150',
  whiteText: 'white',
  blackText: 'black',
  dark: 'black',
  brightBg: '#e91e63',
  veryLightGray: '#e8e8e8',
}

const App = () => (
  <GlobalStyles>
    <ThemeProvider theme={theme}>
      <Wrapper id="containerElement">
        <Controller>
          <Scene
            duration={600}
            triggerHook={0.8}
            triggerElement="#about-paragraph"
            classToggle={['.about-section', 'visible']}
          >
            <></>
          </Scene>
          <Scene
            duration={2000}
            triggerHook={1}
            triggerElement="#about-paragraph"
            classToggle={['.expertise-page', 'visible']}
          >
            <></>
          </Scene>
          <Scene
            duration={600}
            triggerHook={0.8}
            triggerElement="#skill-two"
            classToggle={['.skill-two', 'visible']}
          >
            <></>
          </Scene>
          <Scene
            duration={600}
            triggerHook={0.8}
            triggerElement="#skill-three"
            classToggle={['.skill-three', 'visible']}
          >
            <></>
          </Scene>
          <Scene
            duration={600}
            triggerHook={0.8}
            triggerElement="#skill-one"
            classToggle={['.skill-one', 'visible']}
          >
            <>
              <LoadingSplashScreen />
              <Cover />
              <Expertise />
              <FeaturedProjects />
              <Footer />
            </>
          </Scene>
        </Controller>
      </Wrapper>
    </ThemeProvider>
  </GlobalStyles>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  max-width: 100%;
  width: 100%;
  overflow-x: hidden !important;
  margin: 0;
  min-height: 100vh;
  background: #0a192f;
`

const GlobalStyles = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: #0a192f;
  max-width: 100% !important;
  width: 100% !important;
  margin: 0;
  padding: 0;
`

export default App
