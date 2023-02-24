import React, { useContext, useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import Switch from "./Switch/Switch";
import { AppContext } from "../../GlobalContext/AppContext";

const NavBar = () => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer scrollTop={scrollTop} darkTheme={darkTheme}>
      <Title onClick={()=>scrollToTop()}>Erick Monterrubio</Title>
      <Menu darkTheme={darkTheme}>
        <li>
          <NavLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            darkTheme={darkTheme}
          >
            About
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
            Projects
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
            Contact
          </NavLink>
        </li>
      </Menu>
      <Settings>
        <Switch />
        <World />
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
`;

const Title = styled.h2`
  font-size: 30px;
  transition: all 0.5s ease;

  &:hover{
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

  &:hover{
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
  margin-left: 40px;
  font-size: 20px;
`;
