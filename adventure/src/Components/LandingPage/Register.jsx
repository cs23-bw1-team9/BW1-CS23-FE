import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    username: "",
    password1: "",
    password2: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "https://cs23-bw1-team9.herokuapp.com/api/registration/";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("Register RESPONSE", res);
        localStorage.setItem("key", res.data.key);
        this.redirectUser();
      })
      .catch(error => {
        console.error("LOGIN ERROR", error);
      });
  };

  redirectUser = () => {
    this.props.history.push("/GamePage");
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
  render() {
    return (
      <>
        <div className="main-container">
          <div className="signup-container">
            <h1 className="signup-main-header">New to the Dungeon?</h1>
            <h2 className="form-header">Join Us... We have Candy</h2>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="username" />
                <input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" />
                <input
                  value={this.state.password1}
                  onChange={this.handleInputChange}
                  id="password1"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" />
                <input
                  value={this.state.password2}
                  onChange={this.handleInputChange}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div>
                <button type="submit" className="form-btn">
                  Login
                </button>
              </div>
            </form>
            {/*   //------------- Giant OR Container -------------\\ */}
            <div className="or">
              <h1> OR </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
