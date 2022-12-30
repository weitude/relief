import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReliefProvider } from "./hooks/useRelief";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReliefProvider>
    <App />
  </ReliefProvider>,
);
