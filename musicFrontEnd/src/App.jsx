import { useState } from 'react'
import './App.css'
import Lesson from './components/Lesson'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

function App() {


  return (
    <div>
      <Navbar/>
      <Hero/>
      <Lesson/>
    </div>
  )
}

export default App
