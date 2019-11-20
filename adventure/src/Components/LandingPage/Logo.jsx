import React from "react";
import MUDLogo from "../../Images/MUDLogo.png";
import MuddyLogo from "../../Images/MuddyLogo.png";

const Logo = () => {
  return (
    <section className="logo-container">
      <img className="logo" src={MUDLogo} alt="MUD Logo" />
      <img className="muddy-logo" src={MuddyLogo} alt="MUD Logo" />
    </section>
  );
};

export default Logo;
