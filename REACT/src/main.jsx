import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Form component.
*/
import StateandEvents from "./StateandEvents/ColorsandCircles";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateandEvents />
  </StrictMode>
);