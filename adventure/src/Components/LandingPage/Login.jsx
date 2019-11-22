import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = "https://cs23-bw1-team9.herokuapp.com/api/login/";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("LOGIN RESPONSE", res);
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

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="login-container">
            <h1 className="form-main-header"> Already have an account?</h1>
            <h2 className="form-header">
              Join us back in the Dungeon.. if you dare
            </h2>
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
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div>
                <button type="submit" className="form-btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
