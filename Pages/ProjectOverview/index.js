import React from "react";
import styled from "styled-components";
import { getProjectData } from "../../Data";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis impedit velit numquam fuga, sint optio ullam, voluptas inventore rerum, quis magnam? Quasi facere laudantium consectetur eius perspiciatis quam modi unde fugiat vero molestiae cupiditate magni recusandae dolorem aliquam vel dolor, repellendus cumque blanditiis. Minus dolore laudantium natus sed nam voluptas harum laboriosam tenetur obcaecati maxime sequi vero iure ipsa dignissimos, porro officiis, eum ducimus error suscipit animi quis expedita in eius. Quis quia inventore mollitia architecto dolorem sed voluptatum quisquam, repellat quos ratione porro rerum excepturi ut esse voluptatem accusamus nobis odit asperiores praesentium! Eos totam adipisci quia cum quos?";

const ProjectOverview = ({ id = "", toggleShowProject=f=>f }) => {
  const { name, url, technologies, description, imgUrl } = getProjectData(id);
  return (
    <Wrapper>
        <Exit onClick={() => toggleShowProject('')}>X</Exit>
      <Heading>
        <b>{name}.</b>
      </Heading>
      <Section>Services and Launch site</Section>
      <Description>{description}</Description>
      <ImageSection></ImageSection>
    </Wrapper>
  );
};

const Exit=styled.div`
    font-size:18px;
    position:absolute;
    top:5%;
    right:10%;
    cursor:pointer;
    &:hover{
        color:slategray;
    }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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
`;

const Section = styled(Container)``;

const Description = styled(Container)``;

const ImageSection = styled(Container)``;

export default ProjectOverview;
