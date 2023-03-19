import React, { useState, useContext } from "react";
import { AppContext } from "../../../GlobalContext/AppContext";
import styled from "styled-components";
import { BiBrightness } from "react-icons/bi";
import { BsMoonStarsFill } from "react-icons/bs";
import s from "./Switch.module.css";

const Switch = () => {
  const [theme, setTheme] = useState(true);
  const { dispatch } = useContext(AppContext);

  const themeLS = window.localStorage.getItem("theme")
  let themeBool = false
  
  if(themeLS === "true"){
    themeBool = true
  } else{
    themeBool = false
  }

  function handleTheme() {
    theme === false ? setTheme(true) : setTheme(false);
    dispatch({ type: "SWITCH_THEME", payload: theme });
    window.localStorage.setItem("theme", theme)
  }

  return (
    <SwitchContainer>
      <Sun />
      <label className={s.switch}>
        <input type="checkbox" onClick={() => handleTheme()} checked={themeBool}/>
        <span className={s.slider}></span>
      </label>
      <Moon />
    </SwitchContainer>
  );
};

export default Switch;

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Sun = styled(BiBrightness)`
  color: yellow;
`
const Moon = styled(BsMoonStarsFill)`
  color: white;
`
