import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container as UnstyledContainer } from 'react-bootstrap'
import { Tween } from 'react-gsap'
import styled from 'styled-components'
import { VimeoBackground } from '../../Components'
import { NAME_FULL } from '../../Data'

const Cover = ({ handleScroll = (f) => f }) => {
  const stopVideo = function (element) {
    var iframe = element.querySelector('iframe')
    var video = element.querySelector('video')
    if (iframe) {
      var iframeSrc = iframe.src
      iframe.src = iframeSrc
    }
    if (video) {
      video.pause()
    }
  }

  return (
    <>
      <ForegroundCenteredContainer>
        <Container>
          <Text className="greeting">Hi, my name is</Text>
          <Text className="name">{NAME_FULL}.</Text>
          <Text className="tagline">I build things for the web.</Text>
          <Text className="about">
            I'm a front-end software engineer based in Sydney, Australia
            specializing in building exceptional websites, applications, and
            everything in between.
          </Text>
        </Container>
      </ForegroundCenteredContainer>
      <VimeoBackground>
        <Wrapper id="home">
          {/* <VideoBackground /> */}

          <Tween
            from={{ y: '-3vh' }}
            to={{ y: '-8vh' }}
            duration={2}
            repeat={-1}
            yoyo
            position="start"
          >
            <IconContainer>
              <Scroll>Scroll</Scroll>
              <Icon icon={faAngleDoubleDown} />
            </IconContainer>
          </Tween>
        </Wrapper>
      </VimeoBackground>
    </>
  )
}

const CenteredContainer = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
  }
`

const ForegroundCenteredContainer = styled(CenteredContainer)`
  z-index: 10;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;

  @media (max-width: 400px) {
    top: 30px;
    left: 0;
    transform: none;
  }
`

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  /* background: black; */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  user-select: none;

  @media (max-width: 750px) {
    justify-content: start;
    align-items: start;
  }
`

const Container = styled(UnstyledContainer)`
  min-width: 700px;
  padding: 0;
  margin: 0;
  @media (max-width: 750px) {
    max-width: 80vw;
    min-width: 80vw;
  }
`

const Scroll = styled.div`
  font-size: 20px;
`

const Icon = styled(FontAwesomeIcon)``

const IconContainer = styled.div`
  color: orange;
  font-size: 40px;
  width: 50px;
  height: auto;
  text-align: center;
  position: absolute;
  bottom: 3vh;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 500px) {
    display: none;
  }
`

const Text = styled.div`
  color: white;
  width: 100%;
  max-width: 100%;

  &.greeting {
    color: rgb(100, 255, 218);
    font-size: 16px;
    margin-bottom: 10px;
    font-family: 'Roboto Mono', monospace;
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }

  &.name {
    font-weight: 600;
    font-size: 54px;
    font-family: 'Open Sans Condensed', sans-serif;

    @media (max-width: 750px) {
      font-size: 36px;
    }
  }

  &.tagline {
    font-weight: 600;
    font-size: 54px;
    font-family: 'Open Sans Condensed', sans-serif;
    color: rgb(232, 232, 232);
    margin: 30px 0;

    @media (max-width: 750px) {
      font-size: 36px;
      margin: 25px 0;
    }
  }

  &.about {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
    color: rgb(245, 245, 245);
    @media (max-width: 750px) {
      font-size: 14px;
    }
  }
`

export default Cover
