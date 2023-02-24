import React, { createContext, useReducer } from "react";

const initialState = {
  darkTheme: false,
  language: "EN",
};

function Reducer(state, action) {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        darkTheme: action.payload,
      };
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value} {...props} />;
}
