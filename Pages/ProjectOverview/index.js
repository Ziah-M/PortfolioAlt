import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import "../../Animations/animations.css";
import { getProjectData } from "../../Data";

const ProjectOverview = ({ id = "", toggleShowProject = (f) => f }) => {
  const { name, url, technologies, description, imgUrl } = getProjectData(id);
  const history = useHistory();
  return (
    <Wrapper>
      <Exit onClick={() => toggleShowProject("")}>X</Exit>
      <Heading>
        <b>
          {name}
          <ColoredSpan>.</ColoredSpan>
        </b>
      </Heading>
      <Section>
        <ServicesContainer>
          <b>TECHNOLOGIES</b>
          {technologies.map((technology, index) => (
            <React.Fragment key={`project-overview-${index}`}>
              <br />
              {technology}
            </React.Fragment>
          ))}
          <br />
          Test
        </ServicesContainer>
        <LaunchBtn onClick={() => history.push(url)}>
          <b>Launch Site</b>
        </LaunchBtn>
      </Section>
      <Description>{description}</Description>
      <ImageSection onClick={() => history.push(url)}>
        <ImgWrapper>
          <Image src={imgUrl} />
        </ImgWrapper>
      </ImageSection>
    </Wrapper>
  );
};

const Exit = styled.div`
  font-size: 18px;
  position: absolute;
  top: 5%;
  right: 10%;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;

const ColoredSpan = styled.span`
  color: #e91e63;
`;

const ServicesContainer = styled.div`
  max-width: 100px;
  font-size: 12px;
`;

const LaunchBtn = styled.button`
  border: 2px solid #e91e63;
  padding: 8px;
  user-select: none;
  text-transform: uppercase;
  font-size: 12px;
  color: #e91e63;
  background: transparent;
  &:hover {
    color: white;
    background: #e91e63;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 100vw;
  width: 100vw;
  min-height: 100vh;
  background: #e8e8e8;
  color: black;
  padding: 10% 15%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Container)`
  font-size: 56px;
  margin-bottom: 40px;
`;

const Section = styled(Container)`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
`;

const Description = styled(Container)`
  margin-bottom: 40px;
`;

const ImageSection = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 8px;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 80vw;
  height: auto;
  margin: auto;
`;

const ImgWrapper = styled.div`
  width: 100%;
  margin: auto;
`;

export default ProjectOverview;
