import React from "react";
import Logo from "./Logo";
import Login from "./Login";
const LandingPage = props => {
  return (
    <section className="landing-page-body">
      <Logo />
      <Login setIsLoggedIn={props.setIsLoggedIn} />
    </section>
  );
};

export default LandingPage;
