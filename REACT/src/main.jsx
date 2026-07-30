import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Navigation component.

The .jsx extension is optional.
*/

import AmazonPage from "./Amazon page";
import "./index.css";
// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage />
   </StrictMode>
);