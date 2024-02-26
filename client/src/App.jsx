import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import DineUp from './Pages/DineUp'
function App() {
  return (
    <div className=''>
    <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path='/sign_up' element={<DineUp />} />
        <Route path='/sign_in' element={<Signin />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
