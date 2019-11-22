import React from "react";
import Logo from "./Logo";
import Login from "./Login";
import Register from "./Register";
const LandingPage = props => {
  return (
    <section className="landing-page-body">
      <Logo />
      <Register {...props} />
      <Login {...props} />
    </section>
  );
};

export default LandingPage;
