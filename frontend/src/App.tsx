import React from 'react';
import { useState } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { Button } from '@mui/material';

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
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </body>

    </div>
  );
}

export default App;
