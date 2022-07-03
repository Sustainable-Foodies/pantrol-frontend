import React, { useEffect, useMemo, useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import PantryList from "./PantryList";
import PantryListHeader from "./PantryListHeader";
import YourDataChart from "./YourDataChart";
import { SpacerVertical } from "../components";
import { Button, Container } from "@mui/material";
import AddItemAlert from "./AddItemAlert";
import { useLocation, useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import ActionToolbarHeader from "./ActionToolbarHeader";
import { useApp } from "../store";

export default function HomePage() {
  const [isAddItemAlertOpen, setIsAddAlertOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({});
  const location = useLocation()
  const { state: { pantryList }, actions: { setPantryList } } = useApp()

  useEffect(() => {
    if (location.state?.list) {
      const list = [...location.state.list]

      setPantryList([
        ...list,
        ...pantryList,
      ])

      delete location.state.list
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
