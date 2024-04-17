import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Instruments from './components/Instruments/Instruments';
import Title from './components/Title/Title';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterStudentForm from './components/RegisterForm/RegisterStudentForm';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  // Function to toggle login form visibility
  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowRegister(false); 
  };

  // Function to toggle registration form visibility
  const toggleRegisterForm = () => {
    setShowRegister(!showRegister);
    setShowLogin(false); 
  };

  return (
    document.title="Music Academy",
    <div>
      <Navbar toggleLoginForm={toggleLoginForm} toggleRegisterForm={toggleRegisterForm} />
      <Hero toggleRegisterForm={toggleRegisterForm} />
      <div className="container">
        <Title title="Instruments" />
        <Instruments />
        <Title title="About Music Academy" />
        <About />
        <Title title="Testimonials" />
        <Testimonials />
        <Title title="Contact us" />
        <Contact />
        <Footer />
      </div>
      {showLogin && <LoginForm />}
      {showRegister && <RegisterStudentForm />}
    </div>
  );
}

export default App;
