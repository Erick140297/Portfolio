import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./GlobalContext/AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>
);
