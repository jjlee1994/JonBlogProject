import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
