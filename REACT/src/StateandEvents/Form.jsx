/*
How to handle form input and events

This component demonstrates:
1. Handling input change events.
2. Handling a button click (form submission).
3. Displaying a simple form.
*/

function Form() {

  // ======================================
  // Runs whenever the Name input changes
  // ======================================
  const nameOnChange = (e) => {
    console.log("Name is:", e.target.value);
  };

  // ======================================
  // Runs whenever the Email input changes
  // ======================================
  const emailOnChange = (e) => {
    console.log("Email is:", e.target.value);
  };

  // ======================================
  // Runs whenever the Password input changes
  // ======================================
  const passwordOnChange = (e) => {
    console.log("Password is:", e.target.value);
  };

  // ======================================
  // Runs when the form is submitted
  // ======================================
  const onSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    console.log("Submit button clicked");
  };

  return (
    <div>
      <h2>React Form Example</h2>

      <form onSubmit={onSubmit}>

        {/* Name Input */}
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            onChange={nameOnChange}
            placeholder="Enter your name"
          />
        </div>

        <br />

        {/* Email Input */}
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            onChange={emailOnChange}
            placeholder="Enter your email"
          />
        </div>

        <br />

        {/* Password Input */}
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            onChange={passwordOnChange}
            placeholder="Enter your password"
          />
        </div>

        <br />

        {/* Submit Button */}
        <button  type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Form;