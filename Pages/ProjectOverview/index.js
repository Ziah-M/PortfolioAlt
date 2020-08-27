import React from "react";
import styled from "styled-components";

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis impedit velit numquam fuga, sint optio ullam, voluptas inventore rerum, quis magnam? Quasi facere laudantium consectetur eius perspiciatis quam modi unde fugiat vero molestiae cupiditate magni recusandae dolorem aliquam vel dolor, repellendus cumque blanditiis. Minus dolore laudantium natus sed nam voluptas harum laboriosam tenetur obcaecati maxime sequi vero iure ipsa dignissimos, porro officiis, eum ducimus error suscipit animi quis expedita in eius. Quis quia inventore mollitia architecto dolorem sed voluptatum quisquam, repellat quos ratione porro rerum excepturi ut esse voluptatem accusamus nobis odit asperiores praesentium! Eos totam adipisci quia cum quos?";

const ProjectOverview = ({
  heading = "Default Application",
  description = DEFAULT_DESCRIPTION,
}) => {
  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <Section>Services and Launch site</Section>
      <Description>{description}</Description>
      <ImageSection></ImageSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  background: slategray;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Container)``;

const Section = styled(Container)``;

const Description = styled(Container)``;

const ImageSection = styled(Container)``;

export default ProjectOverview;
