import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Navigation component.

The .jsx extension is optional.
*/

import Mapping from "./Mapping";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Mapping />
   </StrictMode>
);