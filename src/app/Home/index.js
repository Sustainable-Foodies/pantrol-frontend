import React, { useMemo, useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import PantryList from "./PantryList";
import { pantryList } from "../../constants/pantry.list";
import PantryListHeader from "./PantryListHeader";
import YourDataChart from "./YourDataChart";
import { SpacerVertical } from "../components";
import { Container } from "@mui/material";
import AddItemAlert from "./AddItemAlert";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import ActionToolbarHeader from "./ActionToolbarHeader";

export default function HomePage() {
  const [isAddItemAlertOpen, setIsAddAlertOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});

  const openItemDetails = (item) => {
    navigate(`/app/item?id=${item.id}`);
  };

  const onAddClick = () => setIsAddAlertOpen(true);

  const onItemSelected = (id) => (selected) => {
    setSelectedItems({
      ...selectedItems,
      [id]: selected,
    });
  };

  const amountOfSelectedItems = useMemo(() => {
    return Object.values(selectedItems).filter((bool) => bool).length;
  }, [selectedItems]);

  return (
    <div>
      {amountOfSelectedItems > 0 ? (
        <ActionToolbarHeader
          title={`${amountOfSelectedItems} items selected`}
          onUnselectClick={() => setSelectedItems({})}
        />
      ) : (
        <ToolbarHeader
          title="Pantrol"
          selected
          onUnselectClick={() => setSelectedItems({})}
        />
      )}

      <Container>
        <YourDataChart />
        <SpacerVertical height={10} />

        <PantryListHeader title="Your pantry today:" showFilter />
        <PantryList
          list={pantryList}
          onItemClick={openItemDetails}
          selectedItems={selectedItems}
          onItemSelected={onItemSelected}
        />
      </Container>

      <AddButton onClick={onAddClick} />

      {isAddItemAlertOpen && (
        <AddItemAlert onClose={() => setIsAddAlertOpen(false)} />
      )}
    </div>
  );
}
