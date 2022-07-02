import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { SpacerVertical } from "../components";

export default function ToolbarHeader({
  title,
  onStartButtonClick,
  StartIcon,
  EndButton,
}) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {onStartButtonClick && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={onStartButtonClick}
            >
              <StartIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {EndButton}
        </Toolbar>
      </AppBar>
      <SpacerVertical height={64} />
    </>
  );
}
