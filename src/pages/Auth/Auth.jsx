import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../sections/Navbar/Navbar";

import "./Auth.css";

import AuthImage from "../../images/auth.png";

const SERVER_URL = process.env.REACT_APP_ARTICLO_SERVER_URL;

function Auth() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("signup");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
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
    }
  };

  return (
    <div>
      <Navbar />
      <div className="auth-content">
        <img src={AuthImage} alt="Auth" className="auth-image" />
        <div className="auth-container">
          <h2 className="auth-title">Get Started</h2>
          <div className="auth-tabs">
            <Tab
              activeTab={activeTab}
              onTabChange={handleTabChange}
              tabs={[
                { id: "login", label: "Login" },
                { id: "signup", label: "Signup" },
              ]}
            />
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

// A simple tab component
function Tab({ activeTab, onTabChange, tabs }) {
  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
