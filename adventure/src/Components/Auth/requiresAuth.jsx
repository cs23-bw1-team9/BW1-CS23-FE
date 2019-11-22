import React from "react";
import axios from "axios";


axios.defaults.baseURL = "https://cs23-bw1-team9.herokuapp.com/api/";
// axios.interceptors.request.use(
//   options => {
//     if (localStorage.key)
//       options.headers.authorization = `Token ${localStorage.key}`;
//     return options;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );

axios.interceptors.request.use(function(requestConfig) {
  const key = localStorage.getItem("key");
  requestConfig.headers.authorization = `Token ${key}`;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const key = localStorage.getItem("key");
      const notLoggedIn = <h3>Please Join Us</h3>;

      return <>{key ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
