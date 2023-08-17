import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './navbar';
import Result from './pages/result'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/result" element={<Result />}
        {/* Define other routes and their corresponding components here */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
