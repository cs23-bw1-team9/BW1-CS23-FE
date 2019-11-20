import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Routes

import LandingPage from "./Components/LandingPage";
import GamePage from "./Components/GamePage/GamePage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />

      <Route exact path="/GamePage" component={GamePage} />
    </BrowserRouter>
  );
};

export default Routes;
