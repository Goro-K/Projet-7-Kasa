import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import AboutUs from './pages/aboutus/aboutUs'
import Header from './components/header'
import Error from './pages/error'
import Footer from './components/footer'
import './container.css'
import Lodging from './pages/lodgings/lodging'

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
          <Route path="/Error" element={<Error />}/>
        </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)