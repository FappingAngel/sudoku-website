import React from 'react';
import './App.css';
import HomeScreen from './Screens/home/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import LoginScreen from './Screens/login/Login';
import OpenTaskScreen from './Screens/openTask/openTask';


function App() {
return (
<Router>
  <Routes>
    <Route path="/" element={<HomeScreen/>}></Route>
    <Route path="/home" element={<HomeScreen/>}></Route>
    <Route path="/task" element= {<OpenTaskScreen/>}></Route>
    <Route path="/login" element={<LoginScreen/>}></Route>
  </Routes>
</Router>
);
}

export default App;
