import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Navbar/>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Authentication type="login"/>}/>
          <Route path="/signup" element={<Authentication type="signup"/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
