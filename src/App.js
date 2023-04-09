import React from 'react';
import Styles from './App.module.css'
import SignUp from './components/SignUp';
import { Route, Routes , Navigate } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className={Styles.Home}>
      <Routes >
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/Signup" />} />
      </Routes>
    </div>
  );
}

export default App;
