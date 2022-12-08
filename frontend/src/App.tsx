import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Authentication from './pages/Authentication';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Authentication type="login"/>}/>
        <Route path="/signup" element={<Authentication type="signup"/>}/>
      </Routes>
    </div>
  );
}

export default App;
