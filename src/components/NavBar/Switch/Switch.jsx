import React, { useState, useContext } from "react";
import { AppContext } from "../../../GlobalContext/AppContext";
import styled from "styled-components";
import { BiBrightness, BiMoon } from "react-icons/bi";
import s from "./Switch.module.css";

const Switch = () => {
  const [theme, setTheme] = useState(true);
  const { dispatch } = useContext(AppContext);

  function handleTheme() {
    theme === false ? setTheme(true) : setTheme(false);
    dispatch({ type: "SWITCH_THEME", payload: theme });
  }

  return (
    <SwitchContainer>
      <BiBrightness />
      <label className={s.switch}>
        <input type="checkbox" onClick={() => handleTheme()} />
        <span className={s.slider}></span>
      </label>
      <BiMoon />
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
