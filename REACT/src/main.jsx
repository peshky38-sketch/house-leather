import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Form component.
*/
import StateandEvents from "./StateandEvents/Form2.0";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StateandEvents />
  </StrictMode>
);