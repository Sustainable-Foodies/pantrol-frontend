import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Checkbox } from "@mui/material";

export default function PantryItem({
  onClick,
  title,
  subtitle,
  imgUrl,
  onSelect,
  isSelected = false,
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
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
        <ListItemText
          primary={title}
          secondary={subtitle}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </ListItemButton>

      {onSelect && (
        <div>
          <Checkbox
            checked={isSelected}
            onChange={(event) => onSelect(event.target.checked)}
          />
        </div>
      )}
    </div>
  );
}
