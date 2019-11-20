import React from "react";
import Logo from "./Logo";
import Login from "./Login";
class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <Logo />
        <Login />
      </body>
    );
  }
}
export default LandingPage;
