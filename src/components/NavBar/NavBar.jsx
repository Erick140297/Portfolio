import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../GlobalContext/AppContext";
import styled from "styled-components";
import { TbWorld } from "react-icons/tb";
import Switch from "./Switch/Switch";

const NavBar = () => {
  const { state } = useContext(AppContext);
  const darkTheme = state.darkTheme;
  const [scrollTop, setScrollTop] = useState(0);
  console.log(scrollTop);

  const handleScroll = () => {
    setScrollTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer scrollTop={scrollTop} darkTheme={darkTheme}>
      <Title>Erick Monterrubio</Title>
      <Menu darkTheme={darkTheme}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
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
  background: ${({ darkTheme }) => (darkTheme ? "#212020" : "#e0d8d8")};
  height: ${({ scrollTop }) => (scrollTop > 0 ? "60px" : "80px")};
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

const Menu = styled.ul`
  display: flex;
  li {
    list-style: none;
    margin: 10px;
  }
  a {
    color: ${({ darkTheme }) => (darkTheme ? "#ff0000" : "#000000")};
    text-decoration: none;
    font-size: 20px;
    font-weight: bolder;
    transition: all 0.5s ease;
  }
  a:hover {
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
