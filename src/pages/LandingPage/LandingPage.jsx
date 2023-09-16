import React, { useState } from "react";

import Features from "../../sections/Features/Features";
import Footer from "../../sections/Footer/Footer";
import Login from "../../components/Login/Login";
import Signup from "../../components/Singup/Singup";
import ScrollToTopButton from "../../components/ScrollToTopButton/ScrollToTopButton";
import Navbar from "../../sections/Navbar/Navbar";
import HeroSection from "../../sections/HeroSection/HeroSection";
import ContactSection from "../../sections/ContactSection/ContactSection";
import PricingSection from "../../sections/PricingSection/PricingSection ";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  // };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // const handleSignupClick = () => {
  //   setShowSignup(true);
  // };

  const handleCloseSignup = () => {
    setShowSignup(false);
  };

  return (
    <div>
      <ScrollToTopButton />
      <Navbar />
      <HeroSection />
      <Features />
      <PricingSection />
      <ContactSection />
      <Footer />
      {showSignup && <Signup handleCloseSingup={handleCloseSignup} />}
      {showLogin && <Login handleCloseLogin={handleCloseLogin} />}
    </div>
  );
};

export default LandingPage;
