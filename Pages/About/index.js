import React from "react";
import { Container as UnstyledContainer } from "react-bootstrap";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about">
      <Heading>
        About Me<BrightColor>.</BrightColor>
      </Heading>
      <Container fluid>
        <Overview>overview here</Overview>
        <Details>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
          numquam a animi assumenda velit labore unde fugit, pariatur, cum
          voluptates eos harum ad ducimus inventore nihil saepe ipsum
          distinctio, tenetur amet enim illo debitis quasi dicta quae! Id
          aperiam pariatur explicabo obcaecati error esse, neque accusantium
          tempore hic incidunt! Optio, natus excepturi! Maiores mollitia quam
          molestias tempore aperiam modi. Sint odio, repellat esse,
          necessitatibus ratione consequatur, similique obcaecati beatae culpa
          vel minima fugiat voluptatem? Tenetur, accusantium ea. Eius veniam,
          molestias alias odit laboriosam harum labore libero facilis modi
          delectus quae nulla possimus architecto inventore commodi. Placeat
          delectus dolor similique culpa.
        </Details>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 75vh;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
font-size:56px; 
color:white;
text-align-center;
`;

const BrightColor = styled.span`
  color: #e91e63;
  margin: 20px 0;
`;

const Container = styled(UnstyledContainer)`
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Overview = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 25px auto auto auto;
`;

const Details = styled.div`
  width: 60%;
  margin: auto auto auto 25px;
  text-align: center;
`;

export default About;
