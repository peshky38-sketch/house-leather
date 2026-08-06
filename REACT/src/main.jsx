import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the timer component.
*/
import Startandstop from "./SideEffects/Startandstop.jsx";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Startandstop />
  </StrictMode>
);