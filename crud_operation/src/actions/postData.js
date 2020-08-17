import axios from "axios";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  axios
    .get("http://localhost:9000/user")
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const create = (data) => (dispatch) => {
  axios
    .post("http://localhost:9000/user", data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.CREATE,
        payload: res.data,
      });
    })
    .then(window.location.reload())
    .catch((err) => console.log(err));
};

export const update = (id, data) => (dispatch) => {
  axios
    .put("http://localhost:9000/user/" + id, data)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.UPDATE,
        payload: res.data,
      });
    })
    .then(window.location.reload())
    .catch((err) => console.log(err));
};

export const Delete = (id) => (dispatch) => {
  axios
    .delete("http://localhost:9000/user/" + id)
    .then((res) => {
      dispatch({
        type: ACTION_TYPES.DELETE,
        payload: id,
      });
    })
    .then(window.location.reload())
    .catch((err) => console.log(err));
};
