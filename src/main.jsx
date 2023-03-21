import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "./GlobalContext/AppContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
