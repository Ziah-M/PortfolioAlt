import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components'

const TasteNavbar = () => {
  return (
    <Navbar style={{background:'rgba(0,0,0,0.9)', color:'white', position:'sticky', top:'0', left:'0'}}>
      <Navbar.Brand />
      <StyledNavLink>Home</StyledNavLink>
      <StyledNavLink>About</StyledNavLink>
      <StyledNavLink>Offer</StyledNavLink>
      <StyledNavLink>Menu</StyledNavLink>
      <StyledNavLink>Gallery</StyledNavLink>
      <StyledNavLink>Book</StyledNavLink>
      <StyledNavLink>Contact</StyledNavLink>
    </Navbar>
  );
};

const StyledNavLink = styled(Nav.Link)`
color:white;
`

export default TasteNavbar;
