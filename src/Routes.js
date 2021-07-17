import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import AuthGuard from "./Guards/AuthGuard";
import MainNavBar from "./components/MainNavBar";

function Routes() {
  return (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/" exact>
        <AuthGuard>
          <MainNavBar />
          <Home />
        </AuthGuard>
      </Route>
    </Switch>
  );
}

export default Routes;
