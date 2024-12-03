import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DeveloperSite from './components/DeveloperSite';
const App = () => {
  return (
    <Router>
      <Dashboard />
      <DeveloperSite/>
    </Router>
  );
};

export default App;
