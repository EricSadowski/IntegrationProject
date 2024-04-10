import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/home';
import Register from './pages/register';
import Instruments from './pages/instruments';
import '../src/styles/MainStyles.css' ;
import Lessons from './pages/lessons';

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/instruments" element={<Instruments />} />
          <Route path="/lesson" element={<Lessons />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
