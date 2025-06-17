
import React from "react";
import  { useState, createContext } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.scss';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashboard';
import ExercisesParent from './components/ExercisesParent';
import Bmi from "./components/Bmi";
import ChatModule from './components/ChatModule/ChatModule';

import MealDashboard from './pages/MealDashboard';

export const userContext = createContext();


const App = () => {

  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState(null);
  const [MealDashboardStatus, setMealDashboardStatus] = useState(false);

  console.log(MealDashboardStatus);



  const handleLogin = (uname, loginStatus) => {
    setUsername(uname);
    setLoginStatus(loginStatus);
  }

  const handleMealStatus = (MealDashboardStatus) => {
    setMealDashboardStatus(!MealDashboardStatus);
  }
  

  if (!loginStatus) {
    return (
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup handleLogin={handleLogin} />} />
      </Routes>
    )
  }

  return (

    <userContext.Provider value={{ username, loginStatus }}>
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar  handleLogin={handleLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/exercises" element={<ExercisesParent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/MealDashboard" element={<MealDashboard handleMealStatus={handleMealStatus} />} />
          <Route path="/bmi" element={<Bmi/>}/>
          <Route path="/ChatModule" element={<ChatModule />} />
        </Routes>

        <Footer />
      </Box >
    </userContext.Provider>


    
  )

};

export default App;
