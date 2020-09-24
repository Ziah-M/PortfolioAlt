import React from "react";
import { Container as UnstyledContainer } from "react-bootstrap";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about">
      <Heading>
        About Me<BrightColor>.</BrightColor>
      </Heading>
      <Container>
        <Overview>overview here</Overview>
        <Details>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          corporis delectus, nobis dolorem esse eveniet odit libero cupiditate
          voluptates quas explicabo placeat, sit assumenda ex amet nihil,
          consectetur optio quod!
        </Details>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 40px 40px;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 75vh;
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #434343 74%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 56px;
  color: white;
  text-align: center;
`;

const BrightColor = styled.span`
  color: #e91e63;
  margin: 20px 0;
`;

const Container = styled.div`
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
