import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";
import { ProjectCard as UnstyledProjectCard } from "./ProjectCard";

const DEFAULT_PROJECTS = [
  "Gioventinos",
  "Movies Overload",
  // "Organic Shop",
];

const Projects = ({
  toggleShowProject = (f) => f,
  projects = DEFAULT_PROJECTS,
}) => {
  return (
    <Wrapper id='projects' fluid>
      <Heading>Projects</Heading>
      <Showcase>
        {projects.map((project, index) => (
          <ProjectCard
            projectId={project}
            key={`portfolio-showcase-${index}`}
            toggleShowProject={toggleShowProject}
          ></ProjectCard>
        ))}
      </Showcase>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width:100vw;
  width: 100vw;
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
  margin-top:40px;
  font-size:52px;
`;

const Row = styled(UnstyledRow)``;

const ProjectCard = styled(UnstyledProjectCard)``;

const Showcase = styled(Row)`
  margin: 50px 12% 50px 12%;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
`;

export default Projects;
