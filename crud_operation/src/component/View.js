import React, { useEffect } from "react";

import { connect } from "react-redux";
import * as actions from "../actions/postData";
import UserRows from "./UserRows";
export function View(props) {
  // const [users, setUsers] = useState([]);
  // const [fil, setFil] = useState([]);

  // useEffect(() => {

  //   axios
  //     .get("http://localhost:9000/user")
  //     .then((res) => {
  //       setUsers(res.data);
  //       setFil(res.data);

  //     })
  //     .catch((err) => console.log(err));
  // }, [setUsers, setFil]);
  console.log(props);
  useEffect(() => {
    props.fetchAllPostMessages();
  }, []);
  // function userList(e) {
  //   setFil(users.filter((user) => user.Fname.includes(e.target.value)));
  // }
  function tableUser() {
    return props.userList.map(function (user, i) {
      return <UserRows user={user} key={i} />;
    });
  }

  return (
    <center>
      <h2>List Of Users</h2>

      <input
        className="form-control"
        placeholder="Search.."
        // onChange={userList}
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

      {/* </>
      )} */}
    </center>
  );
}
const mapStateToProps = (state) => ({
  userList: state.postData.data,
});

const mapActionToProps = {
  fetchAllPostMessages: actions.fetchAll,
  deletePostMessage: actions.Delete,
};

export default connect(mapStateToProps, mapActionToProps)(View);
