import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './global';
// pages
import Info from './pages/info'
import Result from './pages/result'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <WeatherProvider>
      <Routes>
        
        <Route path="/" element={<App />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/result" element={<Result />} />
        <Route path="/info" element={<Info />} /> 
      </Routes>
      </WeatherProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
