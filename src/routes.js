import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import KMS from "./pages/KMS";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={KMS} />
      </Switch>
    </BrowserRouter>
  );
}
