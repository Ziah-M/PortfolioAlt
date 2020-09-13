import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";

const Footer = () => {
  return (
    <Wrapper>
      <Link>HOME</Link>
      <Link>ABOUT</Link>
      <Copywrite>&copy; Ziah M. 2020</Copywrite>
      <Link>PROJECTS</Link>
      <Link>CONTACT</Link>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100vw;
  width:100vw;
  min-height: 15vh;
  background: white;
  color: slategray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.div`
  text-transform: uppercase;
  margin: 0 15px;
`;

const Copywrite = styled.div`
  margin: 0px 40px;
`;

export default Footer;
