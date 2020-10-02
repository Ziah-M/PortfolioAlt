import React from 'react'
import { Container as UnstyledContainer } from 'react-bootstrap'
import styled from 'styled-components'
import { getSkills } from '../../Data'

const Skills = ({ skills = getSkills() }) => (
  <Wrapper fluid id="skills">
    <Inner>
      <Competencies>COMPETENCIES</Competencies>
      <br />
      <SkillsWrapper>
        <SkillsHeading>FRONT-END:</SkillsHeading>
        <SkillsList>
          {skills.frontend.map((skill, index) => (
            <span key={`skills-front-${index}`}>{`${skill}, `}</span>
          ))}
        </SkillsList>
        <SkillsHeading>TOOLS:</SkillsHeading>
        <SkillsList>
          {skills.tools.map((skill, index) => (
            <span key={`skills-tools-${index}`}>{`${skill}, `}</span>
          ))}
        </SkillsList>
        <SkillsHeading>BACK-END:</SkillsHeading>
        <SkillsList>
          {skills.backend.map((skill, index) => (
            <span key={`skills-back-${index}`}>{`${skill}, `}</span>
          ))}
        </SkillsList>
        <SkillsHeading>OTHER:</SkillsHeading>
        <SkillsList>
          {skills.other.map((skill, index) => (
            <span key={`skills-other-${index}`}>{`${skill}, `}</span>
          ))}
        </SkillsList>
      </SkillsWrapper>
    </Inner>
  </Wrapper>
)

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 33vh;
  background: #e91e63;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SkillsList = styled.div`
  margin-bottom: 15px;
  margin-left: 10px;
  font-size: 14px;
  max-width: 300px;
`

const SkillsHeading = styled.div`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 15px;
`

const SkillsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px;
`

const Inner = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  min-width: 50%;
`

const Competencies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 52px;
  font-weight: 500;

  @media (max-width: 500px) {
    font-size: 40px;
  }
`

export default Skills
