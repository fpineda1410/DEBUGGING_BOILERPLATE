import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Components from "./Components/Components";
import Navbar from "./Components/Navbar";
import Detail_Page from "./Components/DetailPage";

import injectContext from "./store/appContext";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Components />
        </Route>
		<Route exact path="/detail/:indicator">
          <Detail_Page />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
