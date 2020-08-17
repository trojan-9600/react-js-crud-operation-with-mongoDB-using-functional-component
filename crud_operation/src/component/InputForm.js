import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";

import { connect } from "react-redux";
import * as actions from "../actions/postData";
import "./Inputform.css";
import { Form } from "react-bootstrap";
export function InputForm(props) {
  const formik = useFormik({
    initialValues: {
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Email: "",
      Date: "",
      Bio: "",
    },
    onSubmit: (values) => {
      props.insertData(values);
    },
    validate: (values) => {
      let errors = {};

      if (!values.FirstName) {
        errors.FirstName = "required";
      }
      if (!values.MiddleName) {
        errors.MiddleName = "required";
      }
      if (!values.LastName) {
        errors.LastName = "required";
      }
      if (!values.Email) {
        errors.Email = "required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
      ) {
        errors.Email = "Email format Invalid";
      }
      if (!values.Date) {
        errors.Date = "required";
      }
      if (!values.Bio) {
        errors.Bio = "required";
      }
      return errors;
    },
  });
  console.log(formik.errors);

  return (
    <form className="inputform" onSubmit={formik.handleSubmit}>
      <h2>Register</h2>

      <div className="form-group">
        <label>FirstName</label>
        <input
          type="text"
          className="form-control"
          name="FirstName"
          value={formik.values.FirstName}
          onChange={formik.handleChange}
          placeholder="Enter FirstName"
        />
        {formik.errors.FirstName ? (
          <div className="error">{formik.errors.FirstName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Middlename</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter MiddleName"
          name="MiddleName"
          value={formik.values.MiddlName}
          onChange={formik.handleChange}
        />
        {formik.errors.MiddleName ? (
          <div className="error">{formik.errors.MiddleName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Lastname</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter LastName"
          name="LastName"
          value={formik.values.LastName}
          onChange={formik.handleChange}
        />
        {formik.errors.LastName ? (
          <div className="error">{formik.errors.LastName}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="Email"
          value={formik.values.Email}
          onChange={formik.handleChange}
        />
        {formik.errors.Email ? (
          <div className="error">{formik.errors.Email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Date Of birth</label>
        <input
          type="date"
          className="form-control"
          name="Date"
          value={formik.values.Date}
          onChange={formik.handleChange}
        />
        {formik.errors.Date ? (
          <div className="error">{formik.errors.Date}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label>Write Your BIO</label>
        <Form.Control
          as="textarea"
          rows="3"
          name="Bio"
          value={formik.values.Bio}
          onChange={formik.handleChange}
        />
        {formik.errors.Bio ? (
          <div className="error"> {formik.errors.Bio}</div>
        ) : null}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
const mapStateToProps = (state) => ({
  userList: state.postData.data,
});

const mapActionToProps = {
  insertData: actions.create,
};

export default connect(mapStateToProps, mapActionToProps)(InputForm);
