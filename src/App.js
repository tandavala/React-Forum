import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CreateLink from "./Components/Link/CreateLink";
import Login from "./Components/Auth/Login";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import SearchLink from "./Components/Link/SearchLinks";
import LinkDetail from "./Components/Link/LinkDetail";
import LinkList from "./Components/Link/LinkList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/new/1" />} />
        <Route exaxt path="/create" componet={CreateLink} />
        <Route exact path="/login" componet={Login} />
        <Route exact path="/forgot" componet={ForgotPassword} />
        <Route exact path="/search" componet={SearchLink} />
        <Route exact path="/top" componet={LinkList} />
        <Route exact path="/new/:page" componet={LinkList} />
        <Route exact path="/link/:linkId" componet={LinkDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
