import React, { useState } from "react";

function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (firstName && lastName) {
  //       setFullName(`${firstName} ${lastName}`);
  //     } else {
  //       alert("Please fill out both fields.");
  //     }
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      alert("Please fill out both fields.");
      setFullName(""); // Clear fullName if the form is incomplete
      return;
    }
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      {/* <h2>Full Name Display</h2> */}
      <div id="fullNameDisplay">
        <h2>Full Name Display</h2>
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
        {fullName ? <p>Full Name: {fullName}</p> : <p>Full Name: </p>}
      </div>
    </div>
    // </div>
  );
}

export default DisplayName;
