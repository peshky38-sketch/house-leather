import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the Navigation component.

The .jsx extension is optional.
*/
import AmazonPage2 from "./AmazonPage2.0/index.jsx";
import "./index.css";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AmazonPage2 />
   </StrictMode>
);