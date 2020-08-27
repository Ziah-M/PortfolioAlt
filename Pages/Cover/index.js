import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";

const Cover = () => {
  return (
    <Wrapper>
      <ForegroundCenteredContainer>
        <Container
          style={{
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Row>
            <Name>Ziah Mayne</Name>
          </Row>
          <Row>
            <Tagline>
              Software developer <br />
              specializing in frontend web development
            </Tagline>
          </Row>
        </Container>
      </ForegroundCenteredContainer>
      <CenteredContainer>
        <Container>
          <Row>
            <Logo>ZM</Logo>
          </Row>
          <Row>
            About &nbsp;<BrightColor>/</BrightColor>&nbsp; Projects &nbsp;{" "}
            <BrightColor>/</BrightColor> &nbsp;Contact
          </Row>
        </Container>
      </CenteredContainer>
      <ContentArea></ContentArea>
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
`;

const Tagline = styled.h6`
  color: lightgray;
`;

const BrightColor = styled.span`
  color: #e91e63;
`;

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: black;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Row = styled(UnstyledRow)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Container = styled(UnstyledContainer)``;

const ContentArea = styled.div`
  position: relative;
`;

const Logo = styled.div`
  color: #e91e63;
  height: 300px;
  width: 300px;
  font-size: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Cover;
