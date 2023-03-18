import React from "react";
import styled from "styled-components";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default ({ to, darkTheme, onClick }) => (
  <>
    {to === "prev" ? (
      <ArrowLeft onClick={onClick} darktheme={darkTheme ? "true" : 0}/>
    ) : (
      <ArrowRight onClick={onClick} darktheme={darkTheme ? "true" : 0}/>
    )}
  </>
);

const ArrowLeft = styled(BsFillArrowLeftCircleFill)`
  font-size: 30px;
  color: ${({ darktheme }) => (darktheme ? "#ff0000" : "#f50057")};
  top: 125px;
  right: 35px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 950px) {
    font-size: 20px;
    top: 75px;
    right: 25px;
  }
`;
const ArrowRight = styled(BsFillArrowRightCircleFill)`
  font-size: 30px;
  color: ${({ darktheme }) => (darktheme ? "#ff0000" : "#f50057")};
  position: relative;
  margin-left: 100%;
  bottom: 135px;
  left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 950px) {
    font-size: 20px;
    bottom: 80px;
    left: 5px;
  }
`;
