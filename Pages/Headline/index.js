import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";

const Headline = () => {
    return (
        <Wrapper>
           <Statement>
              <Attention>I'm a front-end web developer </Attention>with a passion for creating modern websites and web-apps.
           </Statement>
        </Wrapper>
    )
}

const Wrapper = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
  background: #e91e63;
  color: white;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const Attention = styled.span`
  color:black;
`

const Statement = styled.h1`
  color:white;
  font-size:52px;
  text-align:center;
  width:50%;
`

export default Headline
