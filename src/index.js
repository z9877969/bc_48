import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
// import reportWebVitals from './reportWebVitals';

// const title = React.createElement(
//   "h1",
//   { className: "title" },
//   "Hello React createElement!"
// );

// const list = React.createElement(
//   "ul",
//   null,
//   React.createElement(
//     "li",
//     null,
//     React.createElement("h2", null, "Item Title - 1 ")
//   ),
//   React.createElement(
//     "li",
//     null,
//     React.createElement("h2", null, "Item Title - 2 ")
//   )
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <h1 className="title">Hello React!</h1>
  // title
  // list
  // <ul>
  //   <li>
  //     <h2>Title inem JSX - 1</h2>
  //   </li>
  //   <li>
  //     <h2>Title inem JSX - 2</h2>
  //   </li>
  // </ul>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// ul>li*2>h2
