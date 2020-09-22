import React from "react";
import Navbar from "../../Components/Navigation/ProfileSideNavbar";
import styled from "styled-components";

const borderColor = "#ff6f61";

const Sidebar = () => {
  return (
    <Container>
      <Navbar />
    </Container>
  );
};

const Container = styled.div`
  border-right: 2px solid ${borderColor};
  background-color: #ecf0f0;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export default Sidebar;