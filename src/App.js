import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/home' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/service' Component={Services} />
        <Route path='/contact' Component={Contact} />
        <Route path="/*" element={ <Navigate to="/" /> } />
      </Routes>    

      <Footer />
    </>
  );
}

export default App;
