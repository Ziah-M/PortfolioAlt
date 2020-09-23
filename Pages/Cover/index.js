import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
} from "react-bootstrap";
import { Timeline, Tween } from "react-gsap";
import { Link as UnstyledLink } from "react-scroll";
import styled from "styled-components";
import { getName } from "../../Data";

const Cover = ({ handleScroll = (f) => f }) => {
  const { first, last } = getName();
  return (
    <Wrapper id='home'>
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
                <Name>
                  {first} {last}
                </Name>
              </Row>
            </Tween>
            <Row>
              <Tween
                from={{ filter: "blur(200px)", scale: 0.1 }}
                to={{ filter: "blur(0px)", scale: 1 }}
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
                  <Initials>
                    {first.charAt(0)}
                    {last.charAt(0)}
                  </Initials>
                </Logo>
              </Row>
              <Row>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={3000}
                >
                  About
                </Link>
                &nbsp;
                <BrightColor>/</BrightColor>&nbsp;
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={2000}
                >
                  Projects
                </Link>
                &nbsp; <BrightColor>/</BrightColor> &nbsp;
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={2500}
                >
                  Contact
                </Link>
              </Row>
            </Container>
          </CenteredContainer>
        </Tween>
        <Tween
          from={{ y: 0 }}
          to={{ y: "-5vh" }}
          duration={2}
          repeat={-1}
          yoyo
          position={"start"}
        >
          <IconContainer>
            <Scroll>Scroll</Scroll>
            <Icon icon={faAngleDoubleDown} />
          </IconContainer>
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

  @media (max-width: 400px) {
  }
`;

const ForegroundCenteredContainer = styled(CenteredContainer)`
  z-index: 10;
`;

const Name = styled.h1`
  color: white;
  font-size: 72px;
  user-select: none;

  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

const Tagline = styled.h6`
  color: lightgray;
  user-select: none;

  @media (max-width: 400px) {
    font-size: 14px;
  }
`;

const BrightColor = styled.span`
  color: #e91e63;
`;

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
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
  @media (max-width: 400px) {
    font-size: 200px;
  }

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
  user-select: none;
  transition: 0.3s ease-in;
  &:hover {
    color: lightsteelblue !important;
  }
`;

const Scroll = styled.div`
  font-size: 20px;
`;

const Icon = styled(FontAwesomeIcon)``;

const IconContainer = styled.div`
  color: orange;
  font-size: 40px;
  width: 50px;
  height: auto;
  text-align: center;
  position: absolute;
  bottom: 3vh;
  left: 50%;
  transform: translate(-50%);
`;

export default Cover;
