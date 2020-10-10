import React from 'react'
import {
  Container as UContainer,
  Row as URow,
  Col as UCol,
} from 'react-bootstrap'
import styled from 'styled-components'
import useScript from '../../Components/useScript'

const ABOUT =
  'Hi my name is Ziah. I am a front-end engineer with a passion for developing pixel-perfect and performant modern web applications'

const Expertise = () => {
  useScript(
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css">',
  )
  return (
    <Wrapper>
      <Row className="heading">Expertise</Row>
      <Row className="about">{ABOUT}</Row>
      <Row className="skills-section">
        <Col xs={11} sm={5} md={3} className="skill-heading">
          Languages
          <Row className="skill-icons">
            <i class="devicon-html5-plain-wordmark colored"></i>
            <i class="devicon-css3-plain-wordmark colored"></i>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-sass-original colored"></i>
          </Row>
        </Col>
        <Col xs={11} sm={5} md={3} className="skill-heading">
          Technologies
          <Row className="skill-icons">
            <i class="devicon-react-original-wordmark colored"></i>
            <Icon>
              <div
                className="iconify"
                data-icon="logos-redux"
                data-inline="false"
              ></div>
              <div className="icon-title redux">Redux</div>
            </Icon>
            <i class="devicon-bootstrap-plain-wordmark colored"></i>
            <i class="devicon-nodejs-plain-wordmark colored"></i>
            <i class="devicon-jquery-plain-wordmark colored"></i>
            <i class="devicon-express-original-wordmark colored"></i>
          </Row>
        </Col>
        <Col xs={11} sm={5} md={3} className="skill-heading">
          Tools/Other
          <Row className="skill-icons">
            <Icon>
              <div
                class="iconify"
                data-icon="vscode-icons:file-type-firebase"
                data-inline="false"
              ></div>
              <div className="icon-title firebase">Firebase</div>
            </Icon>
            <i class="devicon-github-plain-wordmark colored"></i>
            <i class="devicon-git-plain-wordmark colored"></i>
            <i class="devicon-npm-original-wordmark colored"></i>

            <i class="devicon-visualstudio-plain-wordmark colored"></i>
            <i class="devicon-webpack-plain-wordmark colored"></i>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(UContainer)`
  width: 100%;
  max-width: 100vw;
  padding: 50px 0;
  background: rgb(250, 250, 250);
`

const Row = styled(URow)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;

  &.heading {
    font-weight: 500;
    font-size: 2.5rem;
  }

  &.about {
    padding: 20px 20% 40px 20%;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }

  &.skills-section {
    padding: 40px 0;
    align-items: start;
  }

  .skill-heading {
    font-weight: 500;
    font-size: 2rem;
    margin: 0 20px;
    text-align: center;
    max-width: 250px;
  }

  .skill-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 30px;
    max-width: 250px;

    i {
      font-size: 75px;
    }
  }
`

const Col = styled(UCol)``

const Icon = styled.div`
  width: 75px;
  height: 75px;

  .iconify {
    font-size: 50px;
  }

  .icon-title {
    font-size: 14px;
    font-weight: 600;
  }

  .redux {
    color: rgb(118, 74, 188);
  }

  .firebase {
    color: darkgrey;
  }
`

export default Expertise
