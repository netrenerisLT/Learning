import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import indexStore from "./store/indexStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={indexStore}>
    <App />
  </Provider>
);
