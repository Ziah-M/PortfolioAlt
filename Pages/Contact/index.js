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
  padding: 80px 0;
  margin: 0 0;
  max-width: 100%;
  width: 100%;
  background: rgb(207, 217, 223);
  background: linear-gradient(
    90deg,
    rgba(207, 217, 223, 1) 0%,
    rgba(226, 235, 240, 1) 100%
  );
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
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
