import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainContainer from "./pages/MainContainer/MainContainer.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import UserDashboard from "./components/UserDashboard/UserDashboard.jsx";
import PrivateRoute from "./PrivateRoute.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<UserDashboard />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<MainContainer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
