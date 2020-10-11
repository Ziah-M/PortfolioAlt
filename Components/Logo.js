import React from 'react'
import styled from 'styled-components'

const Logo = () => (
  <LogoWrapper>
    <Svg viewBox="0 0 84 96" height="75px" width="75px">
      <polygon
        className="path"
        stroke="rgb(100, 255, 218)"
        strokeWidth="4"
        fill="#0A192F"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="39 0 0 22 0 67 39 90 78 68 78 23"
      ></polygon>
    </Svg>
    <LogoInitial>Z</LogoInitial>
  </LogoWrapper>
)

const LogoInitial = styled.div`
  position: absolute;
  color: rgb(100, 255, 218);
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  opacity: 0;

  animation: logoInitial 1.5s linear forwards;
  animation-delay: 1.25s;

  @keyframes logoInitial {
    to {
      opacity: 1;
    }
  }
`

const LogoWrapper = styled.div`
  position: relative;
  animation: shrink 0.5s ease-in-out forwards;
  animation-delay: 2.5s;

  @keyframes shrink {
    to {
      transform:scale(0)
    }
`

const Svg = styled.svg`
  position: relative;

  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 3s ease-in-out forwards;

    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  }
`

export default Logo
