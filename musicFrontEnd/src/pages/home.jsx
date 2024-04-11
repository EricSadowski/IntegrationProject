import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Instruments from "../components/Instruments";
import Title from "../components/Title";

function Home() {
  // Change the title on the internet tab
  document.title = "Home";

  return (
    <div className='container'>
      {/* Hero component only on the Home page */}
      
      <Hero />
      
      {/* Main content */}
      
    </div>
  );
}

export default Home;
