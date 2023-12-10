import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CartItem from './Components/CartItem';



function App() {


  return (
 
<>
<BrowserRouter>
      <div className='container'>
        <div className='row'>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Navbar />
          </nav>
          <header className="py-5 bg-dark">
            <Header />
          </header>
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartitem" element={<CartItem />} />
          </Routes>
          <footer className="py-5 bg-dark">
            <Footer />
          </footer>
         
        </div>
      
           
      </div>
      </BrowserRouter>
</>
  );
}

export default App;
