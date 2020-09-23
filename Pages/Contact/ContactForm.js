import React from "react";
import {
    Button as UnstyledButton, Form as UnstyledForm
} from "react-bootstrap";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Form>
      <Label>NAME:</Label>
      <Control type="text" placeholder="Enter your name here." />

      <Label>EMAIL:</Label>
      <Control type="email" placeholder="Enter your email here." />

      <Label>MESSAGE:</Label>
      <Control type="text" placeholder="Enter your message here." />

      <Button variant="primary" type="submit" block>
        Send Inquiry
      </Button>
    </Form>
  );
};

const Form = styled(UnstyledForm)`
  width: 400px;

  @media (max-width:450px){
    width:300px;
  }
`;

const Label = styled(Form.Label)`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 12px;
  user-select: none;
`;

const Control = styled(Form.Control)`
  margin-bottom: 40px;
  background: #d2d2d2;
  font-size: 12px;
  padding: 20px;
`;

const Button = styled(UnstyledButton)`
  text-transform: uppercase;
  font-size: 12px;
  padding: 10px;
  background: #e91e63;
  color: white;
  border: none;
  transition: 0.3s ease-in-out;
  &:hover {
    background: white;
    color: black;
  }
`;

export default ContactForm;
