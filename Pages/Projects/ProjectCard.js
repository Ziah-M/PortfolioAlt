import React from "react";
import {
  Container as UnstyledContainer
} from "react-bootstrap";
import styled from "styled-components";
import { getProjectData } from "../../Data";


const ProjectCard = ({
  toggleShowProject = (f) => f,
  projectId = "default",
}) => {
  const { name, url, technologies, description, imgUrl } = getProjectData(
    projectId
  );
  return (
    <Wrapper onClick={() => toggleShowProject(projectId)}>
      <Image src={imgUrl} />
      <Title>{name}</Title>
      <HiddenButton>Learn More</HiddenButton>
      <DarkOverlay />
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  margin: 5vw;
  padding: 15px;
  height: 250px;
  width: 250px;

  /* @media (max-width:750px){
  width:250px;
  height:250px;
} */

  background: #e91e63;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 5px;
  color: lightgray;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.2s ease-in;
  &:hover {
    padding: 0;
  }
  position: relative;
`;

const Title = styled.div`
  margin: 10px auto;
  font-weight: 500;
`;

const DarkOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 1;
  display: none;
  ${Wrapper}:hover & {
    display: block;
  }
`;

const HiddenButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  background: transparent;
  border: 2px solid #e91e63;
  color: white;
  width: 50%;
  height: 15%;
  min-height: 30px;
  font-size: 12px;
  font-weight: 500;
  z-index: 2;
  transition: 0.4s ease-in-out;
  &:hover {
    color: black;
    background: white;
    border: 2px solid transparent;
  }
  display: none;
  ${Wrapper}:hover & {
    display: block;
  }
`;

const Image = styled.img`
  width: 220px;
  height: 190px;
  margin: auto;
  border-radius: 5px;
  transition: 0.2s ease-in;
  ${Wrapper}:hover & {
    width: 100%;
    height: 100%;
  }
`;

export default ProjectCard;
export { ProjectCard };

