import React from "react";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
} from "react-bootstrap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";

import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";

const Cover = ({ handleScroll = (f) => f }) => {
  return (
    <Wrapper>
      <Timeline
        labels={[
          {
            label: "start",
            position: 0,
          },
          {
            label: "start-name",
            position: "start+=1",
          },
          {
            label: "start-tagline",
            position: "start+=1.8",
          },
        ]}
      >
        <ForegroundCenteredContainer>
          <Container
            style={{
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Tween
              from={{ filter: "blur(200px)" }}
              to={{ filter: "blur(0px)" }}
              duration={1}
              position={"start-name"}
            >
              <Row>
                <Name>Ziah Mayne</Name>
              </Row>
            </Tween>
            <Row>
              <Tween
                from={{ filter: "blur(200px)", scale:0.1 }}
                to={{ filter: "blur(0px)", scale:1 }}
                duration={1}
                position={"start-tagline"}
              >
                <Tagline>
                  Software developer <br />
                  specializing in frontend web development
                </Tagline>
              </Tween>
            </Row>
          </Container>
        </ForegroundCenteredContainer>
        <Tween
          from={{ filter: "blur(200px)" }}
          to={{ filter: "blur(0px)" }}
          duration={2}
          position={"start"}
        >
          <CenteredContainer>
            <Container>
              <Row>
                <Logo>
                  <Initials>ZM</Initials>
                </Logo>
              </Row>
              <Row>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  About
                </Link>{" "}
                &nbsp;
                <BrightColor>/</BrightColor>&nbsp;{" "}
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  Projects
                </Link>{" "}
                &nbsp; <BrightColor>/</BrightColor> &nbsp;
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={700}
                >
                  Contact
                </Link>
              </Row>
            </Container>
          </CenteredContainer>
        </Tween>
      </Timeline>
    </Wrapper>
  );
};

const CenteredContainer = styled.div`
  padding: 0;
  margin: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForegroundCenteredContainer = styled(CenteredContainer)`
  z-index: 10;
`;

const Name = styled.h1`
  color: white;
  font-size: 72px;
  user-select: none;
`;

const Tagline = styled.h6`
  color: lightgray;
  user-select: none;
`;

const BrightColor = styled.span`
  color: #e91e63;
`;

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width:100vw;
  width: 100vw;
  min-height: 100vh;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Row = styled(UnstyledRow)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled(UnstyledContainer)``;

const Logo = styled.div`
  color: #e91e63;
  height: 300px;
  width: 300px;
  font-size: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const Initials = styled.span`
  user-select: none;
`;

const Link = styled(UnstyledLink)`
  cursor: pointer;
  transition: 0.3s ease-in;
  &:hover {
    color: lightsteelblue !important;
  }
`;

export default Cover;
