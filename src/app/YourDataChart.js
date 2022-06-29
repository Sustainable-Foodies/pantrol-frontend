import React from "react";
import { Link, ListItem, ListItemText } from "@mui/material";

export default function YourDataChart() {
  return (
    <>
      <ListItem
        secondaryAction={
          <Link href="#" color="inherit">
            See more
          </Link>
        }
      >
        <ListItemText primary="Your data" />
      </ListItem>

      <div style={{ height: 150, backgroundColor: 'lightgray', borderRadius: 10 }}></div>
    </>
  );
}
