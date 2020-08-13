import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Form } from "react-bootstrap";
export default function InputForm() {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [bio, setBio] = useState("");

  function OnSubmit(e) {
    e.preventDefault();
    const data = {
      FirstName: fname,
      MiddleName: mname,
      LastName: lname,
      Email: email,
      date: date,
      bio: bio,
    };
    console.log(data);
    axios
      .post("http://localhost:9000/user", data)
      .then((res) => console.log(res.data));
    setFname("");
    setMname("");
    setLname("");
    setEmail("");
    setDate("");
    setBio("");
  }

  return (
    <form className="inputform" onSubmit={OnSubmit}>
      <h2>Register</h2>
      <div className="form-group">
        <label>FirstName</label>
        <input
          type="text"
          value={fname}
          className="form-control"
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter FirstName"
          required
        />
      </div>
      <div className="form-group">
        <label>Middlename</label>
        <input
          type="text"
          value={mname}
          className="form-control"
          onChange={(e) => setMname(e.target.value)}
          placeholder="Enter MiddleName"
          required
        />
      </div>
      <div className="form-group">
        <label>Lastname</label>
        <input
          type="text"
          value={lname}
          className="form-control"
          onChange={(e) => setLname(e.target.value)}
          placeholder="Enter LastName"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label>Date Of birth</label>
        <input
          type="date"
          value={date}
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Write Your BIO</label>
        <Form.Control
          as="textarea"
          rows="3"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
