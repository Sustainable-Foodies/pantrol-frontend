import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
