import { Button } from "@mui/material";
import React from "react";
import Alert from "../../components/Alert";
import SpacerVertical from "../../components/Spacer";

export default function AddItemAlert({ onClose }) {
  return (
    <Alert onClose={onClose}>
      <p>How would you like to add your items?</p>
      <SpacerVertical height={20} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button variant="contained">Scanning</Button>
        <Button variant="contained">Manually</Button>
      </div>
    </Alert>
  );
}
