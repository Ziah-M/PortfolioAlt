import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row,
  Col,
} from "react-bootstrap";

const Skills = () => {
  return (
    <Wrapper fluid>
      <Inner>
      <Competencies>
        COMPETENCIES
      </Competencies>
        <br />BACKEND:
        <br /> Java, Python, NodeJS, Firebase
        <br />
        <br /> FRONTEND:
        <br /> HTML5, CSS3/SCSS, Javascript, JSX, React, JSON, XML, Webpack, Bootstrap
        <br />
        <br /> SOFT SKILLS:
        <br /> Sales &amp; Marketing
        <br />
        <br /> OTHER:
        <br /> Github, Bitbucket, UiPath RPA
      </Inner>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 33vh;
  background: #e91e63;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: start;
  min-width:50%;
`;

const Competencies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default Skills;
