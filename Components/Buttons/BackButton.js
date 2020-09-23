import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Icon = styled(FontAwesomeIcon)`
  font-size: 40px;
  &:hover {
    color: red;
  }
`;

const BackButton = ({onClick}) => {
  return (
    <Icon icon={faChevronLeft} onClick={onClick} />
  );
};

export default BackButton;