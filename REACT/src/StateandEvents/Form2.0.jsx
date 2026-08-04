/*
===========================================
Form2.jsx
State and Events in React

Learning Objectives
1. Use ONE state variable (an object).
2. Handle multiple input fields.
3. Display state changes while typing.
4. Log the form values when submitted.
===========================================
*/

import { useState } from "react";

function Form2() {

  // ======================================
  // One state object to store all form data
  // ======================================

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  // ======================================
  // Handle input changes
  // Updates the correct property in the object
  // ======================================

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  // ======================================
  // Handle form submission
  // Prevents the page from refreshing
  // ======================================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted Successfully");
    console.log("Name:", input.name);
    console.log("Email:", input.email);
    console.log("Phone:", input.phone);
    console.log("Password:", input.password);
  };

  // ======================================
  // JSX
  // ======================================

  return (
    <div>

      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}

        <div>
          <label>Name</label>
        </div>

        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={input.name}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Email */}

        <div>
          <label>Email</label>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={input.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Phone */}

        <div>
          <label>Phone</label>
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={input.phone}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Password */}

        <div>
          <label>Password</label>
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={input.password}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Submit Button */}

        <button onClick={handleSubmit}>
          Submit
        </button>

      </form>

      <hr />

      {/* Display state changes */}

      <h3>Current Form Values</h3>

      <ul>
        <li><strong>Name:</strong> {input.name}</li>
        <li><strong>Email:</strong> {input.email}</li>
        <li><strong>Phone:</strong> {input.phone}</li>
        <li><strong>Password:</strong> {input.password}</li>
      </ul>

    </div>
  );
}

export default Form2;
