import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export default function PantryItem({ onClick, title, subtitle, imgUrl }) {
  return (
    <ListItemButton onClick={onClick}>
      <ListItemAvatar>
        {imgUrl ? (
          <Avatar alt={title} src={imgUrl} />
        ) : (
          <Avatar>
            <FastfoodIcon />
          </Avatar>
        )}
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subtitle} style={{ whiteSpace: 'pre-wrap' }} />
    </ListItemButton>
  );
}
