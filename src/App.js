import React, { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
import Card from "./pages/Card";

import {Route, Switch} from "react-router-dom";
import { NavLink } from "react-router-dom";
import {UserContext} from "./user-context";

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const userData = useState(null)

  return (
    <>
      <UserContext.Provider value={userData}>
        <NavLink activeClassName="activeLink" to="/home">Home</NavLink>
        <NavLink activeClassName="activeLink" to="/login">Login</NavLink>
        <NavLink activeClassName="activeLink" to="/settings">Settings</NavLink>

        <Switch>
          <Route path={["/home", "/"]} exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <ProtectedRoute path="/settings" exact>
            <Settings />
          </ProtectedRoute>
          <Route path="/card/:category" exact>
            <Card />
          </Route>
          <Route><h1>404 ERROR</h1></Route>
        </Switch>
      </UserContext.Provider>
    </>
  );
}

export default App;
