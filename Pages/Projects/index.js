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
  "Organic Shop",
  "TODO",
];

const Projects = ({
  toggleShowProject = (f) => f,
  projects = DEFAULT_PROJECTS,
}) => {
  return (
    <Wrapper fluid>
      <Heading>Projects</Heading>
      <Showcase>
        {projects.map((project) => (
          <ProjectCard
            projectId={project}
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
  margin: 50px 12% 50px 12%;
  display: flex;
  flex-wrap: wrap;
`;

export default Projects;
