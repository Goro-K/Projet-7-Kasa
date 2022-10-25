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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Lodging />} />
          <Route path="/About%20Us" element={<AboutUs />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
