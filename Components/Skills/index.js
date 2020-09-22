import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Skills = () => {
  return (
    <Container fluid>
      <Row noGutters>
        <Col xs={12} style={{ backgroundColor: "#ECF0F0" }}>
          <Row>
            <Col xs={12} className="text-center">
              <h4>
                <i>My web apps are powered by:</i>
              </h4>
            </Col>
          </Row>

          <SkillsIconsRow>
            <Skill imageUrl="https://i.imgur.com/GPlMhgs.png" />
            <Skill imageUrl="https://i.imgur.com/6YW3P9a.png" />
            <Skill imageUrl="https://i.imgur.com/KR1Jz7Q.png" />
            <Skill
              imageUrl="https://i.imgur.com/Nw76Uft.png"
              imageText="React"
            />
            <Skill
              imageUrl="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
              imageText="Redux"
            />
            <Skill
              imageUrl="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
              imageText="Firebase"
            />
            <Skill imageUrl="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" />
          </SkillsIconsRow>
        </Col>
      </Row>
    </Container>
  );
};

const Skill = ({ imageUrl, imageText }) => {
  return (
    <div style={{ width: "100px", height: "100px", display: "inline-block" }}>
      <img
        src={imageUrl}
        style={
          imageText
            ? {
                width: "50px",
                height: "50px",
              }
            : {
                width: "75px",
                height: "75px",
              }
        }
      />

      {imageText && (
        <p style={{ paddingTop: "5px" }}>
          <b>{imageText}</b>
        </p>
      )}
    </div>
  );
};

const SkillsIconsRow = styled(Row)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export default Skills;
