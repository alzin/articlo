import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainContainer from "./pages/MainContainer/MainContainer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import UserDashboard from "./components/UserDashboard/UserDashboard.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<UserDashboard />} />
        <Route path="/home" element={<MainContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
