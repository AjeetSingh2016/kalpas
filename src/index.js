import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./context/ContextProvider";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <App />
// );

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
