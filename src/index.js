import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.scss";
import App from "./components/App/App";

const theme = {
  colors: {
    success: "#fff",
    error: "red",
    warn: "orange",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
