import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./InputOption"

function App() {
  return (
    <div className="app">
      <Header />
      {/* app body */}
      <div className="app_body">
        <Sidebar/>
        <Feed />
      </div>
      {/* feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
