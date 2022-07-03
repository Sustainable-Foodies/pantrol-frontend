import React, { useMemo, useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import PantryList from "./PantryList";
import { pantryList as originalPantryList } from "../../constants/mock.data";
import PantryListHeader from "./PantryListHeader";
import YourDataChart from "./YourDataChart";
import { SpacerVertical } from "../components";
import { Button, Container } from "@mui/material";
import AddItemAlert from "./AddItemAlert";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import ActionToolbarHeader from "./ActionToolbarHeader";

const filterOutConsumed = (list) => {
  return list.filter((obj) => !obj.isConsumed)
}

export default function HomePage() {
  const [isAddItemAlertOpen, setIsAddAlertOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});
  const [pantryList, setPantryList] = useState(filterOutConsumed(originalPantryList))

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

  const consumeItems = () => {
    setPantryList(pantryList.filter(item => !selectedItems[item.id]))
    setSelectedItems({})
  }

  const amountOfSelectedItems = useMemo(() => {
    return Object.values(selectedItems).filter((bool) => bool).length;
  }, [selectedItems]);

  return (
    <div>
      {amountOfSelectedItems > 0 ? (
        <ActionToolbarHeader
          title={`${amountOfSelectedItems} items selected`}
          onUnselectClick={() => setSelectedItems({})}
          endButtons={[<Button key="consume-btn" color="inherit" onClick={consumeItems}>Consume</Button>]}
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
