import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as actions from "../actions/postData";

export function UserRows(props) {
  const [fname, setFname] = useState(props.user.FirstName);
  const [mname, setMname] = useState(props.user.MiddleName);
  const [lname, setLname] = useState(props.user.LastName);
  const [email, setEmail] = useState(props.user.Email);
  const [date, setDate] = useState(props.user.date);
  const [bio, setBio] = useState(props.user.bio);

  function Update() {
    const newRecord = {
      Fname: fname,
      Mname: mname,
      Lname: lname,
      email: email,
      date: date,
      bio: bio,
    };
    props.updateData(props.user._id, newRecord);

    //   axios
    //     .put("http://localhost:9000/user/" + props.user._id, newRecord)
    //     .then(window.location.reload())
    //     .catch((err) => console.log(err));
  }

  function delete_user() {
    props.deleteData(props.user._id);
    // axios
    //   .delete("http://localhost:9000/user/" + props.user._id)
    //   .then(window.location.reload())
    //   .catch((err) => console.log(err));
  }

  return (
    <tr>
      <td>
        <input
          type="text"
          value={fname}
          className="form-control"
          onChange={(e) => setFname(e.target.value)}
          placeholder="Enter FirstName"
          required
        />
      </td>
      <td>
        <input
          type="text"
          value={mname}
          className="form-control"
          onChange={(e) => setMname(e.target.value)}
          placeholder="Enter MiddleName"
          required
        />
      </td>
      <td>
        <input
          type="text"
          value={lname}
          className="form-control"
          onChange={(e) => setLname(e.target.value)}
          placeholder="Enter LastName"
          required
        />
      </td>
      <td>
        <input
          type="email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </td>
      <td>
        <input
          type="date"
          value={date}
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </td>
      <td>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="2"
          cols="30"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        {/* <input
            type="text"
            value={this.state.bio}
            className="form-control"
            onChange={(e) => {
              this.setState({ bio: e.target.value });
            }}
          /> */}
      </td>
      <td>
        <button className="btn btn-primary" onClick={Update}>
          Update
        </button>
        {"  "}
        <button className="btn btn-danger" onClick={delete_user}>
          Delete
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = (state) => ({
  userList: state.postData.data,
});

const mapActionToProps = {
  updateData: actions.update,
  deleteData: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(UserRows);
