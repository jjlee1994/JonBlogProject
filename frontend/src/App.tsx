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
import { useState, useEffect } from "react"
import axios from 'axios'

function App() {
    const [state, setState] = useState({
      username: "",
      password: "",
      loggedIn: false,
  })

  function handleChange(event:any){
      setState({...state, [event.target.id]:event.target.value})
  }
  //pass down to login page so we know when we are logged in
  function setLoggedIn(loggedIn: boolean) {
    setState({...state, loggedIn: loggedIn})
  }

  //TODO: Check access token expired
  function verifyLogin() {
      console.log('verify login')
      let access_token = localStorage.getItem('access_token')
      console.log(access_token)
      if (access_token) {
        setState({...state, loggedIn: true})
      }
  }

  //get current user data if logged in
  async function getCurrentUser() {
    console.log('getCurrentUser')
    if(state.loggedIn) {
      const user = await axios({
        method: 'get',
        url: 'http://localhost:5001/current_user',
        headers: {'Authorization' : 'Bearer ' + localStorage.getItem('access_token')}
      })
      if(user) {
        setState({...state, username: user.data.username})
      }
    }
  }

  useEffect(() => {
    verifyLogin()
    getCurrentUser()
  },[state.loggedIn])

  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Navbar pageName="Name" loggedIn={state.loggedIn} username={state.username}/>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home handleChange={handleChange}/>}/>
          <Route path="/login" element={<Authentication type="login" setLoggedIn={setLoggedIn}/>}/>
          <Route path="/:username" element={<Profile />}/>
          <Route path="/signup" element={<Authentication type="signup" setLoggedIn={setLoggedIn}/>}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
