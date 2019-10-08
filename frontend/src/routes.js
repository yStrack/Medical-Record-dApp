import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientLanding from "./pages/PatientLanding";
import Entrerprise from "./pages/Enterprise";
import Login from "./pages/Login";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PatientLanding} />
      <Route path="/login" component={Login} />
      <Route path="/enterprise" component={Entrerprise} />
    </Switch>
  );
}
