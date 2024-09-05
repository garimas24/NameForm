import React, { useState } from "react";

function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert("Please fill out both fields.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        {/* <br /> */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        {/* <br /> */}
        <button type="submit">Submit</button>
      </form>
      <div id="fullName">
        {/* <p>Full Name:</p> */}
        {/* {fullName ? <p>{fullName}</p> : <p>No name entered yet.</p>} */}
        {fullName ? (
          <p>Full Name: {fullName}</p>
        ) : (
          <p>Full Name: No name entered yet.</p>
        )}
      </div>
    </div>
  );
}

export default DisplayName;
