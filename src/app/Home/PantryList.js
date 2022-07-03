import React from "react";
import List from "@mui/material/List";
import PantryItem from "./PantryItem";
import { Divider } from "@mui/material";

export default function PantryList({
  list,
  onItemClick,
  selectedItems,
  onItemSelected,
}) {
  return (
    <List>
      {list.map((item) => (
        <div key={item.id}>
          <PantryItem
            title={item.label}
            subtitle={item.subtitle}
            onClick={() => onItemClick(item)}
            imgUrl={item.img_url}
            isSelected={selectedItems ? selectedItems[item.id] : false}
            onSelect={onItemSelected ? onItemSelected(item.id) : undefined}
          />
          <Divider />
        </div>
      ))}
    </List>
  );
}
