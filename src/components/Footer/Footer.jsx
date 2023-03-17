import React, { useContext } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import { BsLinkedin, BsGithub } from "react-icons/bs";

import styled from "styled-components";

const Footer = () => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  return (
    <FooterContainer darktheme={darkTheme}>
      <A
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/erick-monterrubio-6064811a2/"
      >
        <In />
      </A>
      <A
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Erick140297"
      >
        <Git />
      </A>
      <A
        target="_blank"
        rel="noreferrer"
        //Hacer un link en ingles y uno para español
        href="https://drive.google.com/file/d/1CLUfx62QrlTaPj1t78GqYrpBOk6Z_sD_/view?usp=sharing"
      >
        <CV darktheme={darkTheme}>CV</CV>
      </A>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  background: ${({ darktheme }) => (darktheme ? "#212020" : "#2196f3")};
  color: ${({ darktheme }) => (darktheme ? "#ffffff" : "#050402")};
  font-size: 27px;
  padding: 10px;
`;

const CV = styled.div`
  font-weight: bold;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  padding: 4px;
  font-size: 15px;
  margin-left: 40px;
`;

const In = styled(BsLinkedin)`
  margin-right: 40px;
  color: white;
`;

const Git = styled(BsGithub)`
  color: white;
`;

const A = styled.a`
  text-decoration: none;
`;
