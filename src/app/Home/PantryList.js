import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import PantryItem from "./PantryItem";
import { Divider } from "@mui/material";

export default function PantryList({ list, onItemClick, onItemsSelectedChange }) {
  const [selectedItems, setSelectedItems] = useState({});

  useEffect(() => {
    onItemsSelectedChange(selectedItems)
  }, [selectedItems, onItemsSelectedChange])
  
  const onItemSelected = (id) => (selected) => {
    setSelectedItems({
      ...selectedItems,
      [id]: selected,
    })
  }

  return (
    <List>
      {list.map((item) => (
        <div key={item.id}>
          <PantryItem
            title={item.label}
            subtitle={item.subtitle}
            onClick={() => onItemClick(item)}
            imgUrl={item.img_url}
            isSelected={selectedItems[item.id]}
            onSelect={onItemSelected(item.id)}
          />
          <Divider />
        </div>
      ))}
    </List>
  );
}
