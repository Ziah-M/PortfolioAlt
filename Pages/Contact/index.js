import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Wrapper id="contact">
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
  max-width: 100vw;
  width: 100vw;
  min-height: 80vh;
  background: #e8e8e8;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 56px;
  margin-bottom: 60px;
`;

const BrightColor = styled.span`
  color: #e91e63;
`;

export default Contact;
