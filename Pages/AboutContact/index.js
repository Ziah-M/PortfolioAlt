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
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
`

const Col = styled.div`
  width: 50%;
  max-width: 50vw;
  height: auto;

  @media (max-width: 850px) {
    width: 100%;
    max-width: 100vw;
  }
`

export default AboutContact
