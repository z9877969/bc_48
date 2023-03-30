import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        color: {
          btn: "#827474",
        },
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
