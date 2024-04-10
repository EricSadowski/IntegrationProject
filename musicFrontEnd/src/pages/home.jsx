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
      <Title title='Learn to play instruments and more...' />
      <Instruments />
      <Title title='About our academy' />
      <About />
      <Title title='Review from our students' />
      <Title title='Contact Us' />
    </div>
  );
}

export default Home;
