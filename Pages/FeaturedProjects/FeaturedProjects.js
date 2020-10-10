import React from 'react'
import {
  Container as UContainer,
  Row as URow,
  Col as UCol,
} from 'react-bootstrap'
import styled from 'styled-components'

const FeaturedProjects = () => {
  return (
    <Wrapper>
      <Row className="heading">Featured Projects</Row>
      <Row>
        <Col md={4}>
          <Row className="project-heading"> Bug Tracker</Row>
          <Row className="technologies">
            Technologies: HTML, CSS, JS, React, Redux, Firebase
          </Row>
          <Row className="description">
            A full-stack bug tracking and ticket management web app. This app
            was built with React and uses Redux with Redux thunks for state
            management. Firebase is used for the back-end. The app comes with a
            demo admin-mode that simulates all CRUD operations without affecting
            the integrity of the data in the database. The app also features
            user authentication, session management, and role-based
            authorization.
          </Row>
          <Row className="buttons">
            <Button>Demo</Button>
            <Button>Code</Button>
          </Row>
        </Col>
        <Col md={4}>
          <Img src="https://i.imgur.com/lo89Qq7.jpg" />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="project-heading">
          <Row className="project-heading"> Movie Server</Row>
          <Row className="technologies">
            Technologies: HTML, CSS, JS, React, Redux, Firebase
          </Row>
          <Row className="description">
            An application for browsing information on movies, actors and TV
            shows. It includes search, detailed information on movies and
            actors, reviews, trailers, cast information, rating movies, and
            adding to a playlist.
          </Row>
          <Row className="buttons">
            <Button>Demo</Button>
            <Button>Code</Button>
          </Row>
        </Col>
        <Col md={4}>
          <Img src="https://i.imgur.com/5gVzFDC.png" />
        </Col>
      </Row>
      <Row>
        <Col md={4} className="project-heading">
          <Row className="project-heading"> Gioventinos</Row>
          <Row className="technologies">
            Technologies: HTML, CSS, JS, React, Redux, Firebase
          </Row>
          <Row className="description">
            A site for a fictional pizzeria restaurant.
          </Row>
          <Row className="buttons">
            <Button>Demo</Button>
            <Button>Code</Button>
          </Row>
        </Col>
        <Col md={4}>
          <Img src="https://i.imgur.com/PWomAoC.jpg" />
        </Col>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled(UContainer)`
  width: 100%;
  max-width: 100vw;
  background: rgb(250, 250, 250);
`

const Row = styled(URow)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 20px;
  user-select: none;

  &.heading {
    font-weight: 500;
    font-size: 2.5rem;
  }

  .project-heading {
    font-weight: 500;
    font-size: 1.5rem;
  }

  .technologies {
    font-size: 0.8rem;
  }

  .description {
    font-size: 14px;
    color: #585858;
  }
`

const Col = styled(UCol)``

const Img = styled.img`
  width: 350px;
  max-width: 350px;
  height: 350px;
  border-radius: 5px;
`

const Button = styled.button`
  border-radius: 10px;
  min-width: 100px;
  border: 1px solid #54516a;
  background: white;
  margin-right: 15px;

  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #54516a;
    color: white;
  }
`

export default FeaturedProjects
