import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Form component.
*/
import StateandEvents from "./StateandEvents/ClickMe";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateandEvents />
  </StrictMode>
);