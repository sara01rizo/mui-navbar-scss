import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components2/Header";
import About from "./components2/About";
import { StylesProvider } from "@material-ui/core/styles";

const Router = () => {
  return (
    <StylesProvider injectFirst>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/About" component={About} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default Router;
