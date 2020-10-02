import React from 'react'
import { Container as UnstyledContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { getAbout } from '../../Data'

const About = ({ about = getAbout() }) => (
  <Wrapper id="about">
    <Heading>
      About Me<BrightColor>.</BrightColor>
    </Heading>
    <Details>{about}</Details>
  </Wrapper>
)

const Wrapper = styled.div`
  padding: 80px 0;
  margin: 0;
  height: 100%;
  max-width: 100%;
  width: 100%;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const Heading = styled.h1`
  font-size: 56px;
  color: white;
  text-align: center;
`

const BrightColor = styled.span`
  color: #e91e63;
`

const Details = styled.div`
  padding: 60px 60px 0 60px;
  width: 100%;
  height: 100%;
`

export default About
