import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./styles/index.css";
import MainEventos from "./maineventos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainEventos />
  </StrictMode>
);
