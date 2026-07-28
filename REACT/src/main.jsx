import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Navigation component.

The .jsx extension is optional.
*/

import Navigation from "./Amazon page/Navigation.jsx";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
);