import { ListItem, ListItemText, IconButton, Divider } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function PantryListHeader({ title, showFilter }) {
  return (
    <>
      <ListItem
        secondaryAction={
          showFilter && (
            <IconButton edge="end" aria-label="delete">
              <FilterAltIcon />
            </IconButton>
          )
        }
      >
        <ListItemText primary={title} />
      </ListItem>
      <Divider />
    </>
  );
}
