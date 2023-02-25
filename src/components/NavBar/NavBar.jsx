import React, { useContext, useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import Switch from "./Switch/Switch";
import { AppContext } from "../../GlobalContext/AppContext";

const NavBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const defaultLanguage = state.language;
  console.log(defaultLanguage)
  const [scrollTop, setScrollTop] = useState(0);

  const handlerScroll = () => {
    setScrollTop(window.scrollY);
  };

  const handlerLanguage = (e) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: e.target.value });
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
  }, []);

  return (
    <NavContainer scrollTop={scrollTop} darkTheme={darkTheme}>
      <Title onClick={() => scrollToTop()}>Erick Monterrubio</Title>
      <Menu darkTheme={darkTheme}>
        <li>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            darkTheme={darkTheme}
          >{
            defaultLanguage === "EN" ? `About` : `Acerca de` 
          }    
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            darkTheme={darkTheme}
          >
           {
            defaultLanguage === "EN" ? `Projects` : `Proyectos` 
          }
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            darkTheme={darkTheme}
          >
            {
            defaultLanguage === "EN" ? `Contact` : `Contacto` 
          }
          </NavLink>
        </li>
      </Menu>
      <Settings>
        <Switch />
        <Language>
          <Select onChange={(e)=>handlerLanguage(e)}>
            <option value="EN">EN</option>
            <option value="ES">ES</option>
          </Select>
          <World />
        </Language>
      </Settings>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ darkTheme }) => (darkTheme ? "#212020" : "#9f9f9f")};
  height: ${({ scrollTop }) => (scrollTop > 0 ? "60px" : "80px")};
  padding: 20px;
  transition: all 0.3s ease;
`;

const Title = styled.h2`
  font-size: 30px;
  transition: all 0.5s ease;

  &:hover {
    padding: 5px 10px;
    color: ${({ darkTheme }) => (darkTheme ? "#000000" : "#ffffff")};
    background: ${({ darkTheme }) => (darkTheme ? "#ffffff" : "#000000")};
    border-radius: 15px;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin: 10px;
  }
`;

const NavLink = styled(Link)`
  color: ${({ darkTheme }) => (darkTheme ? "#ff0000" : "#000000")};
  text-decoration: none;
  font-size: 20px;
  font-weight: bolder;
  transition: all 0.5s ease;

  &:hover {
    padding: 5px 10px;
    color: ${({ darkTheme }) => (darkTheme ? "#000000" : "#ffffff")};
    background: ${({ darkTheme }) => (darkTheme ? "#ffffff" : "#000000")};
    border-radius: 15px;
  }
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const World = styled(TbWorld)`
  font-size: 20px;
  margin-left: 5px;
`;

const Language = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
`

const Select = styled.select`
  padding: 3px;
  border-radius: 5px;
  background: #ccc;

  &:focus {
    outline: none;
  }
`