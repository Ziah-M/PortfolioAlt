import React from "react";
import { Container as UnstyledContainer } from "react-bootstrap";
import styled from "styled-components";
import { Link as UnstyledLink } from "react-scroll";

const Footer = () => {
  return (
    <Wrapper>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-50}
        duration={2000}
      >
        HOME
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        ABOUT
      </Link>
      <Copyright>&copy; 2020</Copyright>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-50}
        duration={1000}
      >
        PROJECTS
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-50}
        duration={100}
      >
        CONTACT
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  max-width: 100%;
  width: 100%;
  min-height: 15vh;
  background: rgb(253,251,251);
background: linear-gradient(90deg, rgba(253,251,251,1) 0%, rgba(235,237,238,1) 100%);
  color: slategray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled(UnstyledLink)`
  text-transform: uppercase;
  margin: 0 15px;

  cursor: pointer;
  user-select: none;
  transition: 0.3s ease-in;
  &:hover {
    color: lightsteelblue !important;
  }

  @media (max-width: 600px) {
    margin: 0 5px;
  }
`;

const Copyright = styled.div`
  margin: 0px 40px;
  user-select: none;

  @media (max-width: 600px) {
    margin: 0 12px;
  }
`;

export default Footer;
