import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
          <Route path="/home" element={<Home />} />
          <Route path="/lodging/:id" element={<Lodging />} />
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="*" element={<Navigate to="/error" />} />
          <Route path="/error" element={<Error />} />
        </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)