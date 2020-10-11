import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import * as D from '../../Data'

const ProjectCard = ({
  projectData: { name, description, technologies, url, imgUrl },
}) => {
  const history = useHistory()
  return (
    <Wrapper>
      <FlexContainer>
        <OverviewSection>
          <Row className="project-heading">{name}</Row>
          <Row className="technologies">
            Technologies: HTML, CSS, JS, React, Redux, Firebase
          </Row>
          <Row className="description">{description}</Row>
          <Row className="buttons">
            <Button onClick={() => history.push(url)}>Demo</Button>
            <Button>Code</Button>
          </Row>
        </OverviewSection>
        <ImageSection>
          <Img src={imgUrl} onClick={() => history.push(url)} />
        </ImageSection>
      </FlexContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const OverviewSection = styled.div`
  width: 400px;
  margin: 0 25px;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
  user-select: none;

  &.heading {
    font-weight: 500;
    font-size: 36px;
  }

  &.project-heading {
    font-weight: 500;
    font-size: 26px;
  }

  &.technologies {
    font-size: 14px;
  }

  &.description {
    font-size: 16px;
    color: #585858;
  }
`

const Button = styled.button`
  border-radius: 10px;
  min-width: 100px;
  height: 35px;
  border: 1px solid #54516a;
  background: white;
  margin: 30px 25px 30px 0;

  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #54516a;
    color: white;
  }
`

const ImageSection = styled.div`
  width: 350px;
  height: 350px;
  cursor: pointer;
  margin: 0 25px;
`

const Img = styled.img`
  width: 100%;
  border-radius: 5px;
`

export default ProjectCard
