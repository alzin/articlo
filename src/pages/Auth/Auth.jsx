import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../sections/Navbar/Navbar";

import "./Auth.css";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

function Auth() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${SERVER_URL}/api/login`, loginData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${SERVER_URL}/api/signup`, signupData);
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home"); 
    } catch (error) {
      const errorMessage = error.response.data.message;
      alert(errorMessage);
  };
}

  return (
    <div>
      <Navbar />

      <div className="auth-wrapper">
        <div className="auth-container">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => handleTabChange("signup")}
            >
              Sign up
            </button>
          </div>
          <div className="auth-form">
            {activeTab === "login" ? (
              <form onSubmit={handleLoginSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                />
                <button type="submit">Login</button>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Full Name"
                  value={signupData.username}
                  onChange={handleSignupInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupInputChange}
                />
                <button type="submit">Sign up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
