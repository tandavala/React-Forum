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
    <>
      <h3>Ola mund</h3>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/new/1" />} />
          <Route path="/create" component={CreateLink} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/search" component={SearchLink} />
          <Route path="/top" component={LinkList} />
          <Route path="/new/:page" component={LinkList} />
          <Route path="/link/:linkId" component={LinkDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
