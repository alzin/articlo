import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

import { Button } from "reactstrap";

import "./Signup.css";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

const Signup = ({ handleCloseSingup }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${SERVER_URL}/api/signup`, formData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      window.location.href = "/";
      alert("You have successfully signed up!");
    } catch (error) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={handleCloseSingup}
      contentLabel="Singup Modal"
      className="signup-modal"
    >
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <Button type="submit" color="success" outline>
          Sign Up
        </Button>
      </form>
    </Modal>
  );
};

export default Signup;
