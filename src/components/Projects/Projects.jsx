import React, { useContext } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import styled from "styled-components";
import PiFood from "./PI-Food/PiFood";
import GalaxiaTech from "./GalaxiaTech/GalaxiaTech";
import Invtaciones from "./Invitaciones/Invitaciones"

const Projects = () => {
  const { state } = useContext(AppContext);
  const defaultLanguage = state.language;

  return (
    <Container>
      {defaultLanguage === "EN" ? (
        <>
          <h2 id="projects">Projects</h2>
        </>
      ) : (
        <>
          <h2 id="projects">Proyectos</h2>
        </>
      )}
      <GalaxiaTech />
      <PiFood />
      <Invtaciones/>
    </Container>
  );
};

export default Projects;

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
