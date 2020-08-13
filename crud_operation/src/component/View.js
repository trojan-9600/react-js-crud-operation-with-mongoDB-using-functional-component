import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRows from "./UserRows";
export default function View() {
  const [users, setUsers] = useState([]);
  const [fil, setFil] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9000/user")
      .then((res) => {
        setUsers(res.data);
        setFil(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setUsers, setFil]);

  function userList(e) {
    setFil(users.filter((user) => user.Fname.includes(e.target.value)));
  }
  function tableUser() {
    return fil.map(function (user, i) {
      return <UserRows user={user} key={i} />;
    });
  }

  return (
    <center>
      <h2>List Of Users</h2>
      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input
            className="form-control"
            placeholder="Search.."
            onChange={userList}
          />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Middlename</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>DATE</th>
                <th>BIO</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{tableUser()}</tbody>
          </table>
        </>
      )}
    </center>
  );
}
