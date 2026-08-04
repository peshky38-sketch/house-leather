/*
How to handle form input and events using React State
*/

import { useState } from "react";

function Form() {
  // ======================================
  // State Variables
  // These store the values entered by the user.
  // ======================================

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ======================================
  // Name Input Event
  // Updates the name state whenever the
  // user types in the Name field.
  // ======================================

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  // ======================================
  // Email Input Event
  // Updates the email state whenever the
  // user types in the Email field.
  // ======================================

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };

  // ======================================
  // Password Input Event
  // Updates the password state whenever the
  // user types in the Password field.
  // ======================================

  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  // ======================================
  // Submit Button Event
  // Displays the entered values in the console.
  // ======================================

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // This is where a request to an API
    // would normally be sent.
  };

  // ======================================
  // JSX
  // ======================================

  return (
    <div>

      {/* ---------------- Name ---------------- */}

      <main>
        <div>
          <label>Name</label>
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={nameOnChange}
          />
        </div>
      </main>

      {/* ---------------- Email ---------------- */}

      <main>
        <div>
          <label>Email</label>
        </div>

        <div>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={emailOnChange}
          />
        </div>
      </main>

      {/* ---------------- Password ---------------- */}

      <main>
        <div>
          <label>Password</label>
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            onChange={passwordOnChange}
          />
        </div>
      </main>

      {/* ---------------- Submit Button ---------------- */}

      <main>
        <button onClick={onSubmit}>
          Submit
        </button>
      </main>

      {/* ---------------- Display State ---------------- */}

      <h3>Entered Information</h3>

      <ul>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Password: {password}</li>
      </ul>

    </div>
  );
}

export default Form;