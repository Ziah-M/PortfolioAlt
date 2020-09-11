import React from "react";
import styled from "styled-components";
import { getProjectData } from "../../Data";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis impedit velit numquam fuga, sint optio ullam, voluptas inventore rerum, quis magnam? Quasi facere laudantium consectetur eius perspiciatis quam modi unde fugiat vero molestiae cupiditate magni recusandae dolorem aliquam vel dolor, repellendus cumque blanditiis. Minus dolore laudantium natus sed nam voluptas harum laboriosam tenetur obcaecati maxime sequi vero iure ipsa dignissimos, porro officiis, eum ducimus error suscipit animi quis expedita in eius. Quis quia inventore mollitia architecto dolorem sed voluptatum quisquam, repellat quos ratione porro rerum excepturi ut esse voluptatem accusamus nobis odit asperiores praesentium! Eos totam adipisci quia cum quos?";

const ProjectOverview = ({ id = "", toggleShowProject = (f) => f }) => {
  const { name, url, technologies, description, imgUrl } = getProjectData(id);
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
          {technologies.map((technology) => (
            <>
              <br />
              {technology}
            </>
          ))}
          <br />
          Test
        </ServicesContainer>
        <LaunchBtn>
          <b>Launch Site</b>
        </LaunchBtn>
      </Section>
      <Description>{description}</Description>
      <ImageSection>
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
