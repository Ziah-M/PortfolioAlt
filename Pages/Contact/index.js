import React from "react";
import styled from "styled-components";
import { Container as UnstyledContainer, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Wrapper>
      <H1>
        Contact Me<BrightColor>.</BrightColor>
      </H1>
      <ContactForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 80vh;
  background: lightgray;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 56px;
`;

const BrightColor = styled.span`
  color: #e91e63;
`;

export default Contact;
