import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
React Intro to Components

1. Create a function named MyComponent.
   - Component names start with a capital letter.
   - Return null.

2. Create a function named MyComponent2.
   - Return a valid HTML element.
   - Example: a div with an h1.

3. Create a function named MyComponent3.
   - Use a React Fragment.
   - Return multiple HTML elements.

Rendering Components

1. Display the components inside the App component.

2. Render the App component inside StrictMode.

3. Components can be rendered using:
   - Self-closing tags: <MyComponent />
   - Opening and closing tags: <MyComponent></MyComponent>
*/

// ======================================
// Component 1
// Returns nothing (null)
// ======================================

function MyComponent() {
  return null;
}

// ======================================
// Component 2
// Returns a valid HTML element
// ======================================

function MyComponent2() {
  return (
    <div>
      <h1>My Favourite Food</h1>
      <p>Pilau is my favourite food.</p>
    </div>
  );
}

// ======================================
// Component 3
// Returns multiple elements using
// a React Fragment
// ======================================

function MyComponent3() {
  return (
    <>
      <div>
        <h2>Hobbies</h2>
      </div>

      <div>
        <p>I enjoy reading novels and learning React.</p>
      </div>
    </>
  );
}

// ======================================
// Parent Component
// ======================================

export default function App() {
  return (
    <>
      <h1>My First React App</h1>

      <MyComponent />

      <MyComponent2></MyComponent2>

      <MyComponent3 />
    </>
  );
}

// ======================================
// Render App
// ======================================

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);