import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'

//  <Timeline
// labels={[
//   {
//     label: 'start',
//     position: 0,
//   },
//   {
//     label: 'start-name',
//     position: 'start+=1',
//   },
//   {
//     label: 'start-tagline',
//     position: 'start+=1.8',
//   },
// ]}
// >

{
  /* // <Tween */
}
// from={{ filter: 'blur(200px)' }}
// to={{ filter: 'blur(0px)' }}
// duration={1}
// position="start-name"
// >

const LoadingSplashScreen = () => {
  return (
    <Wrapper>
      <Content>
        <Logo />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a192f;
  z-index: 9001;
  position: fixed;
  user-select: none;
  pointer-events: none;
  opacity:1;

  animation: fadeOut 0.5s ease-in-out forwards;
  animation-delay: 2.5s;

@keyframes fadeOut {
  to {
    opacity:0;
  }
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default LoadingSplashScreen
