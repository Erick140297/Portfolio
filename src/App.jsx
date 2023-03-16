import { useContext } from "react";
import { AppContext } from "./GlobalContext/AppContext";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;

  return (
    <AppContainer darktheme={darkTheme}>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ darktheme }) => (darktheme ? "#050402" : "#ffffff")};
  color: ${({ darktheme }) => (darktheme ? "#ffffff" : "#050402")};
  transition: all 0.3s ease;
`;
