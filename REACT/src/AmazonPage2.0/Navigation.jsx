/*
Top navigation of the page
*/

/*
Import assets or other files from the src directory.
Use ../ because Navigation.jsx is inside the AmazonPage folder.
*/

import logo from "../Amazon page/assets/logo.png";

// =====================================
// Navigation Component
// Returns valid JSX
// =====================================

function Navigation() {
  return (
    <div className="nav">
      <img src={ logo } width="100" height="50" />
      <input type="text" placeholder="Search" />
</div>
  );
}

/*
Default export so other files
can import this component.
*/

export default Navigation;