import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  // confirm_password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/:", formData)
      .then((req, res) => {
        console.log(formData);
      })
      .catch((err) => {
        console.log("error", err.response.data.validation_error);
      });
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h1>Login</h1>
      <div className="form-group">
        <label>email:</label>
        <input
          className="form-control"
          type="text"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </div>
      {error.email ? (
        <span style={{ color: "red" }}>{error.email.message}</span>
      ) : null}
      <div className="form-group">
        <label>password:</label>
        <input
          className="form-control"
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
        />
      </div>
    </>
  );
};

export default Login;
