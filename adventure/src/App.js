import React from "react";

import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Routes />
        </div>
      </header>
    </div>
  );
}

export default App;

// setIsLoggedIn={props.setIsLoggedIn}
