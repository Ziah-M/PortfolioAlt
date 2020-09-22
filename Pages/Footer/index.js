import React from "react";
import {
  Container as UnstyledContainer
} from "react-bootstrap";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Link>HOME</Link>
      <Link>ABOUT</Link>
      <Copyright>&copy; 2020</Copyright>
      <Link>PROJECTS</Link>
      <Link>CONTACT</Link>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100vw;
  width: 100vw;
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

  @media (max-width: 600px) {
    margin: 0 5px;
  }
`;

const Copyright = styled.div`
  margin: 0px 40px;

  @media (max-width: 600px) {
    margin: 0 12px;
  }
`;

export default Footer;
