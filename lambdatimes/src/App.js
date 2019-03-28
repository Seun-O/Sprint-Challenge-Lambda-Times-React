import React, { Component } from "react";

import ContentPage from "./components/ContentPage";

import withAuthenticate from "./components/Authentication/Authenticate";
import Login from "./components/Login";

const Authenticate = withAuthenticate(Login, ContentPage);

const App = () => {
  return <Authenticate />;
};

export default App;
