import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Statusbar from "./components/Statusbar";
import Overview from "./components/Overview";
import Home from "./components/Home";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Sidebar />
        <Statusbar />
        <Route path="/overview/:datasource" component={Overview} />
        <Route exact path="/" component={Home} />
      </div>
    </HashRouter>
  );
}

export default App;
