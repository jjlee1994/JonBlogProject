import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { useState } from "react"

function App() {
    const [state, setState] = useState({
      username: "",
      password: "",
      loggedIn: false
  })

  function onInputChange(event:any){
      setState({...state, [event.target.id]:event.target.value})
  }

  function onLoginChange() {
      setState({...state, loggedIn: true})
  }

  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Navbar pageName="Name" loggedIn={state.loggedIn}/>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home onInputChange={onInputChange}/>}/>
          <Route path="/login" element={<Authentication type="login" username={state.username} password={state.password} onInputChange={onInputChange}/>}/>
          <Route path="/profile" element={<Profile username={state.username}/>}/>
          <Route path="/signup" element={<Authentication type="signup" username={state.username} password={state.password} onInputChange={onInputChange}/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
