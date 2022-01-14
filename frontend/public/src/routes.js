import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import { StylesProvider } from "@material-ui/core/styles";

const Router = () => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/About" component={About} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default Router;
