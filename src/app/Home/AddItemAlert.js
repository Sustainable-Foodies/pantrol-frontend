import { Button } from "@mui/material";
import React from "react";
import { Alert, SpacerVertical } from "../components";
import { useLocation, useNavigate } from "react-router-dom";

export default function AddItemAlert({ onClose }) {
  const navigate = useNavigate();
  const location = useLocation();

  const openScanPage = () => {
    navigate("/app/scan" + location.search);
  };

  const openItemDetailsPage = () => {
    navigate("/app/item" + location.search);
  };

  return (
    <Alert onClose={onClose}>
      <p>How would you like to add your items?</p>
      <SpacerVertical height={10} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Button variant="contained" onClick={openScanPage}>
          Scan my receipt
        </Button>
        <SpacerVertical height={20} />
        <Button variant="contained" onClick={openItemDetailsPage}>
          Scan a product
        </Button>
      </div>
    </Alert>
  );
}
