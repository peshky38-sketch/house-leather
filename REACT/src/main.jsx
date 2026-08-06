import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
Import the timer component.
*/
import GitHubProject from "./GitHubProject";

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GitHubProject />
  </StrictMode>
);