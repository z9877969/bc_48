import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "./index.css";
import App from "./components/App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider
      theme={{
        colors: {
          success: "#fff",
          error: "red",
          warn: "orange",
        },
        fonts: {},
        bg: {},
      }}
    >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ul>li*2>h2
