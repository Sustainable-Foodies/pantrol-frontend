import { ListItem, ListItemText, IconButton, Divider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function PantryListHeader() {
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <FilterAltIcon />
          </IconButton>
        }
      >
        <ListItemText primary="Your pantry today:" />
      </ListItem>
      <Divider />
    </>
  );
}
