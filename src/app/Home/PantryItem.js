import React from "react";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FastfoodIcon from '@mui/icons-material/Fastfood';

export default function PantryItem({ onClick, title, subtitle }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemAvatar>
        <Avatar>
          <FastfoodIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} />
    </ListItemButton>
  );
}
