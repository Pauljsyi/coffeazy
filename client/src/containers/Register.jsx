import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "../components/Form";

const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/users/new", formData)
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

  console.log(formData);
  return (
    <div>
      <h1>Register</h1>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        formData={formData}
        error={error}
      />
    </div>
  );
};

export default Register;
