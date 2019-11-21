import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//------------- Routes -------------\\

import LandingPage from "../Components/LandingPage/LandingPage";
import GamePage from "../Components/GamePage/GamePage";

import PrivateRoute from "./PrivateRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute path="/GamePage" component={GamePage} />;
    </BrowserRouter>
  );
};

export default Routes;
