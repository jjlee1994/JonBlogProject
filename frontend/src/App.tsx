import React from 'react';
import { useState, useEffect } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import axios from 'axios'
import './App.css';
import Home from './pages/Home';
import Authentication from './pages/Authentication';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { Button } from '@mui/material';


function App() {

  const [state, setState] = useState({
    isLoggedIn: false,
    userId: '',
    username: '',
    email: ''
  })

  async function getUserInfo(){
    const response = await axios({
        method: 'post',
        url: 'http://localhost:5001/get_user',
        headers: {
            'Authorization': localStorage.getItem('access_token')
        }
    })
    if (response.status == 200){
        setState({
          isLoggedIn: true,
          userId: response.data.data.id,
          username: response.data.data.username,
          email: response.data.data.email
        })
    } else {
        localStorage.removeItem('access_token')
        setState({
            ...state, isLoggedIn: false
        })
    }
  }

  useEffect(()=>{
    if (localStorage.getItem('access_token') != null){
      getUserInfo()
    }
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <Navbar setAppState={setState} isloggedIn={state.isLoggedIn} username={state.username} />
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home getUserInfo={getUserInfo} isLoggedIn={state.isLoggedIn} userId={state.userId} username={state.username} email={state.email} />}/>
          <Route path="/login" element={<Authentication type="login"/>}/>
          <Route path="/signup" element={<Authentication type="signup"/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/home" element={<Home getUserInfo={getUserInfo} isLoggedIn={state.isLoggedIn} userId={state.userId} username={state.username} email={state.email} />}/>
        </Routes>
      </body>
    </div>
  );
}

export default App;
