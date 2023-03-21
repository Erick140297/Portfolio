import React, { useContext } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import styled from "styled-components";

const Skills = () => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const defaultLanguage = state.language;

  const Logos = [
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/HTML_idmvlv.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/CSS3_wf1gyo.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/JavaScript_vtxy84.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/React_aunlxl.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013865/Logos/Redux_nvftrm.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013866/Logos/Bootstrap_t4jcrl.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013865/Logos/Nextjs_t5umbk.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679414972/Logos/Node.js_zwnqc4.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013866/Logos/Postgresql_edblny.png",
    "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/MongoDB_no2okt.png",
    // "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013866/Logos/Figma_c8zjdn.png",
    // "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013865/Logos/Typescript_j3lzhd.png",
    // `"https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013866/Logos/Dart_b8pl6m.png",`
    // "https://res.cloudinary.com/dnrcmjyu1/image/upload/v1679013867/Logos/Flutter_wr06ih.png",
  ];

  return (
    <Container>
      {defaultLanguage === "EN" ? (
        <>
          <h2 id="skills">Skills</h2>
          <LogoContainer darktheme={darkTheme}>
            {Logos.map((element, index) => {
              return (
                <Logo key={index} darktheme={darkTheme}>
                  <img src={element} alt="logo" />
                </Logo>
              );
            })}
          </LogoContainer>
        </>
      ) : (
        <>
          <h2 id="skills">Tecnologías</h2>
          <LogoContainer darktheme={darkTheme}>
            {Logos.map((element, index) => {
              return (
                <Logo key={index} darktheme={darkTheme}>
                  <img src={element} alt="logo" />
                </Logo>
              );
            })}
          </LogoContainer>
        </>
      )}
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: justify;
  margin-bottom: 40px;
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }

  @media screen and (max-width: 950px) {
    margin-bottom: 20px;
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  background: ${({ darktheme }) => (darktheme ? "#212020" : "#00b0ff")};
`;

const Logo = styled.div`
  margin: 25px;
  padding: 15px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid ${({ darktheme }) => (darktheme ? "#ff0000" : "#f50057")};
  transition: all 0.3s ease;
  img {
    height: 70px;
  }
  &:hover {
    background: ${({ darktheme }) => (darktheme ? "#ff0000" : "#f50057")};
  }
  @media screen and (max-width: 950px) {
    margin: 5px;
    img {
      height: 30px;
    }
  }
`;
