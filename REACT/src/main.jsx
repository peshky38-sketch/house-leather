import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Navigation component.

The .jsx extension is optional.
*/

import Props from "./Props/index.jsx";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Props />
   </StrictMode>
);