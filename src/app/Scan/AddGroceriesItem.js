import React from "react";
import {
  Box,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const roundButtonStyle = {
  height: 40,
  width: 40,
  borderRadius: "50%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#E45A5A',
};

export default function AddGroceriesItem({ onClick }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemAvatar sx={{ pt: '10px', pb: '10px' }}>
        <Box style={roundButtonStyle}>
          <AddIcon sx={{ color: 'white' }} />
        </Box>
      </ListItemAvatar>
      <ListItemText primary="Scan your groceries" />
    </ListItemButton>
  );
}
