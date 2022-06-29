import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import { HomePage, ScanPage, LandingPage, ItemDetailsPage } from './app'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<HomePage />} />
        <Route path="/app/scan" element={<ScanPage />} />
        <Route path="/app/item" element={<ItemDetailsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
