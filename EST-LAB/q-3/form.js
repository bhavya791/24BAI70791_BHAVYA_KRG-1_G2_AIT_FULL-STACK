import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      name: name,
      email: email
    });
  };

  return (
    <div>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Data</h3>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
}

export default Form;
