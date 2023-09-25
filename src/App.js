import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";

import MainContainer from "./pages/MainContainer/MainContainer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import UserDashboard from "./components/UserDashboard/UserDashboard.jsx";
import PrivateRoute from "./PrivateRoute.js";
import Auth from "./pages/Auth/Auth.jsx";

function LandingPageWrapper() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/home" />;
  }

  return <LandingPage />;
}

function AuthWrapper() {
  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/home" />;
  }

  return <Auth />;
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthWrapper />} />
        <Route path="/" element={<LandingPageWrapper />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<MainContainer />} />
          <Route path="/articles" element={<UserDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
