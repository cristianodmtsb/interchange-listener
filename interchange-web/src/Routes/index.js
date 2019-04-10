import React from "react";
import { Switch, Route } from "react-router-dom";

import Browse from "../Pages/Browser";
import PlayList from "../Pages/PlayLists";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Browse} />
    <Route path="/playlists/:id" component={PlayList} />
  </Switch>
);

export default Routes;
