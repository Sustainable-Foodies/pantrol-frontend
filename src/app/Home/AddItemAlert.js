import { Button } from "@mui/material";
import React from "react";
import Alert from "../../components/Alert";
import SpacerVertical from "../../components/Spacer";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function AddItemAlert({ onClose }) {
  const navigate = useNavigate()
  const location = useLocation()

  const openScanPage = () => {
    navigate('/app/scan' + location.search)
  }

  const openItemDetailsPage = () => {
    navigate('/app/item' + location.search)
  }

  return (
    <Alert onClose={onClose}>
      <p>How would you like to add your items?</p>
      <SpacerVertical height={20} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained" onClick={openScanPage}>Scanning</Button>
        <Button variant="contained" onClick={openItemDetailsPage}>Manually</Button>
      </div>
    </Alert>
  );
}
