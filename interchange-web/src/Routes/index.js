import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "../Pages/Browser";
import PlayList from "../Pages/PlayLists";
import Units from "../Pages/Units";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route exact path="/books/:id" component={PlayList} />
    <Route path="/books/:id/unit/:unit" component={Units} />
  </Switch>
);

export default Routes;
