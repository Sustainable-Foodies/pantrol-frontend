import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "fixed",
  bottom: 16,
  right: 16,
};

export default function AddButton({ onClick }) {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={fabStyle}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
}
