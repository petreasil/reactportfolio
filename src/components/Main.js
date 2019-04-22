import React from "react";

import { Route, Switch } from "react-router-dom";

import Landingpage from "./Landingpage";
import Aboutme from "./Aboutme";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landingpage} />
      <Route path="/Aboutme" component={Aboutme} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Resume" component={Resume} />
    </Switch>
  );
};

export default Main;
