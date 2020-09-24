import React from "react";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
} from "react-bootstrap";
import styled from "styled-components";
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
    <Wrapper id="projects" fluid>
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
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  background: rgb(253, 251, 251);
  background: linear-gradient(
    90deg,
    rgba(253, 251, 251, 1) 0%,
    rgba(235, 237, 238, 1) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: #e91e63;
  margin: 50px 0;
  font-size: 52px;
`;

const Row = styled(UnstyledRow)``;

const ProjectCard = styled(UnstyledProjectCard)``;

const Showcase = styled(Row)`
  margin: 0 12% 50px 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default Projects;
