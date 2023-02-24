import { useContext } from "react";
import { AppContext } from "./GlobalContext/AppContext";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;

  return (
    <AppContainer darkTheme={darkTheme}>
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ darkTheme }) => (darkTheme ? "#050402" : "#ffffff")};
  color: ${({ darkTheme }) => (darkTheme ? "#ffffff" : "#050402")};
  transition: all 0.3s ease;
`;
