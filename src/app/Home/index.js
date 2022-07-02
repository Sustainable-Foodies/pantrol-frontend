import React, { useState } from "react";
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

export default function HomePage() {
  const [isAddItemAlertOpen, setIsAddAlertOpen] = useState(false);
  const navigate = useNavigate()

  const openItemDetails = (item) => {
    navigate(`/app/item?id=${item.id}`);
  }

  const onAddClick = () => setIsAddAlertOpen(true)

  return (
    <div>
      <ToolbarHeader title="Pantrol" />

      <Container>
        <YourDataChart />
        <SpacerVertical height={10} />

        <PantryListHeader title="Your pantry today:" showFilter />
        <PantryList list={pantryList} onItemClick={openItemDetails} />
      </Container>

      <AddButton onClick={onAddClick} />

      {isAddItemAlertOpen && (
        <AddItemAlert onClose={() => setIsAddAlertOpen(false)} />
      )}
    </div>
  );
}
