import React from "react";
import styled from "styled-components";
import {
  Container as UnstyledContainer,
  Row as UnstyledRow,
  Col,
} from "react-bootstrap";

const ProjectCard = ({toggleShowProject = (f) => f,}) => {
    return (
        <Wrapper onClick={() => toggleShowProject('t')}>
            App 1
        </Wrapper>
    )
}

const Wrapper = styled(UnstyledContainer)`
margin:10px;
    height:200px;
    width:200px;
    background: #e91e63;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
`

export default ProjectCard

export {
    ProjectCard
}
