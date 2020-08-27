import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";
import { ProjectCard as UnstyledProjectCard } from "./ProjectCard";

const Projects = () => {
  return (
    <Wrapper fluid>
      <Heading>Projects</Heading>
      <Showcase>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </Showcase>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: white;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: #e91e63;
`;

const Row = styled(UnstyledRow)``;

const ProjectCard = styled(UnstyledProjectCard)``;

const Showcase = styled(Row)`
  margin: 50px 20% 50px 20%;
  display: flex;
  flex-wrap: wrap;
`;

export default Projects;
