import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
} from 'react-bootstrap'
import { Timeline, Tween } from 'react-gsap'
import { Link as UnstyledLink } from 'react-scroll'
import styled from 'styled-components'
import { getName } from '../../Data'
import { VideoBackground } from '../../Components'
import { VimeoBackground } from '../../Components'

{
  /* <Timeline
labels={[
  {
    label: 'start',
    position: 0,
  },
  {
    label: 'start-name',
    position: 'start+=1',
  },
  {
    label: 'start-tagline',
    position: 'start+=1.8',
  },
]}
> */
}

// <Tween
// from={{ filter: 'blur(200px)' }}
// to={{ filter: 'blur(0px)' }}
// duration={1}
// position="start-name"
// >

const Cover = ({ handleScroll = (f) => f }) => {
  const { first, last } = getName()
  return (
    <>
            <ForegroundCenteredContainer>
          <Container>
            <Text className="greeting">Hi, my name is</Text>
            <Text className="name">Ziah Mayne.</Text>
            <Text className="tagline">I build things for the web.</Text>
            <Text className="about">
              I'm a front-end software engineer based in Sydney, AU specializing
              in building exceptional websites, applications, and everything in
              between.
            </Text>
          </Container>
        </ForegroundCenteredContainer>
    <VimeoBackground>
      <Wrapper id="home">
        {/* <VideoBackground /> */}



        <Tween
          from={{ y: 0 }}
          to={{ y: '-5vh' }}
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
    </VimeoBackground></>
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
  width:350px;
`

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  /* background: black; */
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #7f8c8d 74%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: auto;
  user-select: none;

`

const Container = styled(UnstyledContainer)``

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
`

const Text = styled.div`
  color: white;

  &.greeting {
    color: rgb(100, 255, 218);
    font-size: 14px;
    font-family: 'Roboto Mono', monospace;
  }

  &.name {
    font-weight: 600;
    font-size: 54px;
    font-family: 'Open Sans Condensed', sans-serif;
  }

  &.tagline {
    font-weight: 600;
    font-size: 54px;
    font-family: 'Open Sans Condensed', sans-serif;
    color: 		rgb(232,232,232);
  }

  &.about {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto Mono', monospace;
    color: 		rgb(245,245,245);
  }
`

export default Cover
