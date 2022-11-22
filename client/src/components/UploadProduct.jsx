import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const initialValue = {
  product_name: "",
  price: 0,
  description: "",
  image: "",
};

const UploadProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialValue);
  const [error, setError] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/upload", formData)
      .then((req, res) => {
        console.log("product uploaded");
        setFormData(formData);
        navigate("/");
      })
      .catch((err) => {
        console.log("upload error");
      });
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>product name</label>
          <input
            type="text"
            name="product_name"
            className="form-control"
            onChange={changeHandler}
            value={formData.product_name}
          />
        </div>
        <div className="form-group">
          <label>price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={changeHandler}
            value={formData.price}
          />
        </div>
        <div className="form-group">
          <label>description</label>
          <input
            type="text"
            name="description"
            className="form-control"
            onChange={changeHandler}
            value={formData.description}
          />
        </div>
        <div className="form-group">
          <label>image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            onChange={changeHandler}
            value=""
          />
        </div>
        <Button>Upload</Button>
      </form>
    </div>
  );
};

export default UploadProduct;