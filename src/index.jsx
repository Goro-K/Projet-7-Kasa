import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/home'
import AboutUs from './Pages/About Us/aboutUs'
import Header from './Components/Header'
import Error from './Components/Error'
import Footer from './Components/Footer'
import './container.css'
import Lodging from './Pages/Lodgings/lodging'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='container'>
        <div className='container-2'>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Lodging/:id" element={<Lodging />} />
          <Route path="/About%20Us" element={<AboutUs />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)

// si ca match avec "Home" ou "Lodging" ? return Route * :