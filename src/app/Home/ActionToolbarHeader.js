import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { SpacerVertical } from "../components";
import { ArrowBack } from "@mui/icons-material";

export default function ActionToolbarHeader({
  title,
  onUnselectClick,
  endButtons = [],
}) {
  return (
    <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="Unselect items"
            sx={{ mr: 2 }}
            onClick={onUnselectClick}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {endButtons.map((btn) => (
            btn
          ))}
        </Toolbar>
      </AppBar>
      <SpacerVertical height={64} />
    </>
  );
}
