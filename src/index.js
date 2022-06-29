import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './LandingPage';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from './app'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Home />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
