import React, { useContext } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import styled from "styled-components";

const About = () => {
  const { state } = useContext(AppContext);
  const defaultLanguage = state.language;
  console.log(defaultLanguage);

  return (
    <Container>
      {defaultLanguage === "EN" ? (
        <div>
          <h2 id="about">About me</h2>
          <p>
            Hi there! I'm Erick Monterrubio, a technology-driven web developer.
            I specialize in developing websites and web applications, and I
            consider myself a versatile developer capable of facing any
            challenge. One of my most notable skills is my ability to work as a
            team and collaborate with other developers and designers to take
            projects to the next level.
          </p>
        </div>
      ) : (
        <div>
          <h2 id="about">Sobre mí</h2>
          <p>
            ¡Hola! Soy Erick Monterrubio, un desarrollador web apasionado por la
            tecnología. Me especializo en el desarrollo de sitios y aplicaciones
            web, y me considero un desarrollador versátil capaz de enfrentar
            cualquier desafío. Una de mis habilidades más notables es mi
            capacidad para trabajar en equipo y colaborar con otros
            desarrolladores y diseñadores para llevar los proyectos al siguiente
            nivel.
          </p>
        </div>
      )}
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  text-align: justify;
  padding-top: 100px;
  margin-bottom: 40px;
  h2 {
    font-size: 25px;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
  @media screen and (max-width: 950px) {
    padding-top: 70px;
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 15px;
    }
  }
`;
