import React, { useState } from "react";
import "./Auth.css"; // Import your CSS file here
import Navbar from "../../sections/Navbar/Navbar";

function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
  };

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
              Signup
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
                  name="fullName"
                  placeholder="Full Name"
                  value={signupData.fullName}
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
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupData.confirmPassword}
                  onChange={handleSignupInputChange}
                />
                <button type="submit">Signup</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
