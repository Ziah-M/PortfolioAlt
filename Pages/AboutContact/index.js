import React from 'react'
import { Container as UnstyledContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { getAbout } from '../../Data'
import About from '../About'
import Contact from '../Contact'

const AboutContact = () => (
  <Wrapper>
    <Col>
      <About />
    </Col>
    <Col>
      <Contact />
    </Col>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const Col = styled.div`
  width: 50%;
  height: auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`

export default AboutContact
