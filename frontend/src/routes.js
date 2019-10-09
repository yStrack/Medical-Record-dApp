import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientLanding from "./pages/PatientLanding/PatientLanding";
import Entrerprise from "./pages/Enterprise/Enterprise";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PatientLanding} />
      <Route path="/login" component={Login} />
      <Route path="/enterprise" component={Entrerprise} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
