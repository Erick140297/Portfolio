import React, { useContext, useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import Switch from "./Switch/Switch";
import { AppContext } from "../../GlobalContext/AppContext";

const NavBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const defaultLanguage = state.language;
  const [scrollTop, setScrollTop] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const handlerScroll = () => {
    setScrollTop(window.scrollY);
  };

  const handlerLanguage = (e) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: e.target.value });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handlerScroll);
  }, []);

  return (
    <NavContainer scrollTop={scrollTop} darktheme={darkTheme}>
      <Title
        onClick={() => {
          scrollToTop();
          showMenu && setShowMenu(!showMenu);
        }}
      >
        Erick Monterrubio
      </Title>
      <MobileIcon onClick={() => setShowMenu(!showMenu)}>
        <BtnMenu />
      </MobileIcon>
      <ItemsContainer open={showMenu} darktheme={darkTheme}>
        <Menu darktheme={darkTheme}>
          <li>
            <NavLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
              darktheme={darkTheme? "true" : 0}
            >
              {defaultLanguage === "EN" ? `About me` : `Sobre mí`}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
              darktheme={darkTheme? "true" : 0}
            >
              {defaultLanguage === "EN" ? `Skills` : `Tecnologías`}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              darktheme={darkTheme? "true" : 0}
              onClick={() => setShowMenu(!showMenu)}
            >
              {defaultLanguage === "EN" ? `Projects` : `Proyectos`}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              darktheme={darkTheme? "true" : 0}
              onClick={() => setShowMenu(!showMenu)}
            >
              {defaultLanguage === "EN" ? `Contact` : `Contacto`}
            </NavLink>
          </li>
        </Menu>
        <Settings>
          <Switch />
          <Language>
            <Select onChange={(e) => handlerLanguage(e)}>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
            </Select>
            <World />
          </Language>
        </Settings>
      </ItemsContainer>
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
  background: ${({ darktheme }) => (darktheme ? "#212020" : "#9f9f9f")};
  height: ${({ scrollTop }) => (scrollTop > 0 ? "60px" : "80px")};
  padding: 20px;
  transition: all 0.3s ease;
  @media screen and (max-width: 950px) {
    height: 60px;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  transition: all 0.5s ease;

  &:hover {
    padding: 5px 10px;
    color: ${({ darktheme }) => (darktheme ? "#000000" : "#ffffff")};
    background: ${({ darktheme }) => (darktheme ? "#ffffff" : "#000000")};
    border-radius: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    font-size: 20px;
    padding: 5px 10px;
  }
`;

const Menu = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin: 10px;
  }
  @media screen and (max-width: 950px) {
    flex-direction: column;
    margin-bottom: 15px;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  color: ${({ darktheme }) => (darktheme ? "#ff0000" : "#000000")};
  text-decoration: none;
  font-size: 20px;
  font-weight: bolder;
  transition: all 0.5s ease;

  &:hover {
    padding: 5px 10px;
    color: ${({ darktheme }) => (darktheme ? "#000000" : "#ffffff")};
    background: ${({ darktheme }) => (darktheme ? "#ffffff" : "#000000")};
    border-radius: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 950px) {
    padding: 5px 10px;
    font-size: 18px;
  }
`;

const Settings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 300px;
  @media screen and (max-width: 1200px) {
    margin-left: 100px;
    justify-content: center;
  }
  @media screen and (max-width: 950px) {
    margin-left: 0px;
    justify-content: center;
  }
`;

const World = styled(TbWorld)`
  font-size: 20px;
  margin-left: 5px;
`;

const Language = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  align-items: center;
`;

const Select = styled.select`
  padding: 3px;
  border-radius: 5px;
  background: #ccc;

  &:focus {
    outline: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const BtnMenu = styled(AiOutlineMenu)`
  color: white;
  margin-right: 0.5rem;
  font-size: 30px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    position: absolute;
    top: 60px;
    right: ${({ open }) => (open ? "0%" : "-105%")};
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background: ${({ darktheme }) => (darktheme ? "#212020" : "#9f9f9f")};
    z-index: 1;
    padding-bottom: 15px;
  }
`;
