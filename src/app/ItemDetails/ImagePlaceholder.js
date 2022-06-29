import { ListItemAvatar, ListItemButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SpacerVertical from "../../components/Spacer";

const style = {
  backgroundColor: "#797979",
  borderRadius: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 120,
  width: 100,
  margin: "0 auto",
};

const roundButtonStyle = {
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function ImagePlaceholder() {
  return (
    <ListItemButton style={style} onClick={() => alert('Pretend an image is selected!')}>
      <ListItemAvatar>
        <Box style={roundButtonStyle} sx={{ bgcolor: "primary.main" }}>
          <AddIcon sx={{ color: "white" }} />
        </Box>
        <SpacerVertical height={10} />
        <p style={{ margin: 0, color: "white", fontSize: 'small' }}>Add a picture</p>
      </ListItemAvatar>
    </ListItemButton>
  );
}
