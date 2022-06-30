import React, { useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import SideMenu from "./SideMenu";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PantryList from "./PantryList";
import pantryList from "../../constants/pantry.list";
import PantryListHeader from "./PantryListHeader";
import YourDataChart from "./YourDataChart";
import { SpacerVertical } from "../components";
import { Container } from "@mui/material";
import AddItemAlert from "./AddItemAlert";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAddItemAlertOpen, setIsAddAlertOpen] = useState(false);
  const navigate = useNavigate()

  const openItemDetails = (item) => {
    navigate(`/app/item?id=${item.id}`);
  }

  return (
    <div>
      <ToolbarHeader title="Pantrol" onStartButtonClick={() => setIsMenuOpen(true)} StartIcon={MenuIcon} />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <Container>
        <YourDataChart />
        <SpacerVertical height={10} />

        <PantryListHeader title="Your pantry today:" showFilter />
        <PantryList list={pantryList} onItemClick={openItemDetails} />
      </Container>

      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={() => setIsAddAlertOpen(true)}
      >
        <AddIcon />
      </Fab>

      {isAddItemAlertOpen && (
        <AddItemAlert onClose={() => setIsAddAlertOpen(false)} />
      )}
    </div>
  );
}
