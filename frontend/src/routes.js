import React from "react";
import { Switch, Route } from "react-router-dom";
import PatientLanding from "./pages/PatientLanding/PatientLanding";
import Entrerprise from "./pages/Enterprise/Enterprise";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Authorized from "./pages/Dashboard/AuthHospital/Authorized";
import Reports from "./pages/Dashboard/Reports/Reports";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={PatientLanding} />
      <Route path="/login" component={Login} />
      <Route path="/enterprise" component={Entrerprise} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/auth" exact component={Authorized} />
      <Route path="/dashboard/reports" exact component={Reports} />
    </Switch>
  );
}
