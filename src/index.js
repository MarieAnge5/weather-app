import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="weather-app-wrapper">
        <div className="weather-app">
   <h1>Sunday, 19:34pm</h1>
          <Search />
        </div>
      </div>
      <p><a href="https://github.com/MarieAnge5/weather-app">Open Source</a> coded by Marie Ange</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);