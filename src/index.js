import "./index.scss";

import { persistor, store } from "./redux/store";

import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import LoaderProvider from "context/LoaderProvider";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import Theme from "./components/Theme/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Theme>
          <LoaderProvider>
            <App />
          </LoaderProvider>
        </Theme>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
