import React, { useState } from "react";
import axios from "axios";

const Login = props => {
  //------------- Defining Register State -------------\\
  const [registerState, setRegisterState] = useState({
    username: "",
    password1: "",
    password2: ""
  });

  //------------- Error State -------------\\
  const [error, setError] = useState(null);
  //------------- Defining Login State -------------\\
  const [loginState, setLoginState] = useState({
    username: "",
    password: ""
  });
  //------------- Register Handler -------------\\
  const handleRegister = e => {
    e.preventDefault();
    console.log(registerState);
    axios
      .post("https://cs23-bw1-team9.herokuapp.com/registration/", registerState)
      .then(res => {
        console.log("REGISTER RESPONSE", res);
        localStorage.setItem("key", res.key);
        // props.setLoginState(true);
      })
      .catch(err => {
        setError(null);
        console.error(err);
      });
  };
  //------------- Login Handler -------------\\
  const handleLogin = e => {
    e.preventDefault();
    axios
      .post("https://cs23-bw1-team9.herokuapp.com/api/login/", loginState)
      .then(res => {
        localStorage.setItem("key", res.key);
        // props.setIsLoggedIn(true);
      })
      .catch(err => {
        setError(null);
        console.log(err);
      });
  };

  //------------- Checks for Register Change -------------\\
  const registerChange = e => {
    setRegisterState({
      ...registerState,
      [e.target.name]: e.target.value
    });
  };
  //------------- Checks for Login Change -------------\\
  const loginChange = e => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="main-container">
      {/*   //------------- Main Sign Up Container -------------\\ */}
      <div className="signup-container">
        <h1 className="signup-main-header">New to the Dungeon?</h1>
        <h2 className="form-header">Join Us... We have Candy</h2>

        <form action="" className="form login" onSubmit={handleRegister}>
          <div className="input-container">
            <input
              placeholder="Username"
              onChange={registerChange}
              name="username"
              value={registerState.username}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              onChange={registerChange}
              name="password1"
              value={registerState.password1}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={registerChange}
              name="password2"
              value={registerState.password2}
            />
          </div>
          <button className="form-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
      {/*   //------------- Giant OR Container -------------\\ */}
      <div className="or">
        <h1> OR </h1>
      </div>
      {/*   //------------- Main Login Container -------------\\ */}
      <div className="login-container">
        <h1 className="form-main-header"> Already have an account?</h1>
        <h2 className="form-header">
          Join us back in the Dungeon.. if you dare
        </h2>
        <form className="form login" onSubmit={handleLogin}>
          <div className="input-container">
            <input
              placeholder="Username"
              onChange={loginChange}
              name="username"
              value={loginState.username}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              onChange={loginChange}
              name="password"
              value={loginState.password}
            />
          </div>
          <button className="form-btn" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
