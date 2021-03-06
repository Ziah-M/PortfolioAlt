import React from 'react'
import { Container as UnstyledContainer } from 'react-bootstrap'
import { Timeline, Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import styled from 'styled-components'

const wordsArray = [
  "I'm",
  'a',
  'front-end',
  'web',
  'developer',
  'with',
  'a',
  'passion',
  'for',
  'creating',
  'modern',
  'websites',
  'and',
  'web-apps',
]

const Headline = () => (
  <PageWrapper id="page-wrapper">
    <Trigger id="trigger-headline" />
    <Controller>
      <Scene
        duration="50%"
        triggerHook={0.25}
        triggerElement="#trigger-headline"
      >
        <Timeline
          wrapper={<Wrapper />}
          labels={[{ label: 'start', position: 0 }]}
        >
          <TextArea>
            <Statement>
              {wordsArray.map((word, index) => (
                <Tween
                  key={`portfoli-headline-${index}`}
                  from={{ opacity: 1 }}
                  to={{
                    x: '8vw',
                    y: '75vh',
                    scale: 0.8,
                    fontSize: '7vmin',
                    opacity: 0,
                  }}
                  position="<0.02"
                >
                  <Word>
                    {index < 5 ? (
                      <span style={{ color: 'black' }}>{word}&nbsp;</span>
                    ) : (
                      <>{word}&nbsp;</>
                    )}
                  </Word>
                </Tween>
              ))}
            </Statement>
          </TextArea>
          <OverlayArea />
        </Timeline>
      </Scene>
    </Controller>
  </PageWrapper>
)

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  height: 100vh;
  background: #e91e63;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Trigger = styled.div`
  position: absolute;
  top: 50%;
  height: 50%;
  width: 100%;
`

const PageWrapper = styled.div`
  background: #e91e63;
  height: 100vh;
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Attention = styled.span`
  color: black;
`

const Statement = styled.h1`
  color: white;
  font-size: 6vmin;
  text-align: center;
  width: 50%;

  @media (max-width: 500px) {
    width: 70%;
  }
`

const TextArea = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const OverlayArea = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -20px;
  opacity: 0.9;
  filter: blur(10px);
  background: #e91e63;
  z-index: 2;
`

const Word = styled.div`
  text-align: center;
  display: inline-block;
  margin-right: 4px;
  user-select: none;
`

export default Headline
