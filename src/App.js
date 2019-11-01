import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aio from "./View/AIO";

const App = () => {
  return (
    <Router>
      <Route exact path="/" render={props => <Aio {...props} />} />
    </Router>
  );
};

export default App;
