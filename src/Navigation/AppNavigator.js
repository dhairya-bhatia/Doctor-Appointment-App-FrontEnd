import React from "react";
import { Switch, Redirect } from "react-router-dom";
import routes from "../AuthenticatedRouting/authenticatedRoutes";
import AuthProtectedRoutes from "../AuthenticatedRouting/AuthProtectedRoutes";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

const AppNavigator = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/login" />
        {routes.map((route) => {
          return (
            <AuthProtectedRoutes
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </ConnectedRouter>
  );
};

export default AppNavigator;
