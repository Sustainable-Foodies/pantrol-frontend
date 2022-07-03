import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage, ScanPage, LandingPage, ItemDetailsPage } from "./app";
import { AppProvider } from "./app/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#E45A5A",
    },
    secondary: {
      main: '#4BDD86',
    }
  },
});

root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<HomePage />} />
            <Route path="/app/scan" element={<ScanPage />} />
            <Route path="/app/item" element={<ItemDetailsPage />} />
          </Routes>
        </HashRouter>
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
