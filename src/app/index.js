import React, { useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import SideMenu from "./SideMenu";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PantryList from "./PantryList";
import { getId } from "../utils";

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

const pantryList = [{
  id: getId(),
  title: 'Watermelon',
  subtitle: '5 days left',
}, {
  id: getId(),
  title: 'Milk',
  subtitle: '14 days left',
}, {
  id: getId(),
  title: 'Cereal',
  subtitle: '18 days left',
}, {
  id: getId(),
  title: 'Coffee',
  subtitle: '20 days left',
}, {
  id: getId(),
  title: 'Apple',
  subtitle: '22 days left',
}, {
  id: getId(),
  title: 'Sugar',
  subtitle: '26 days left',
}]

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <ToolbarHeader title="Pantrol" onMenuClick={() => setIsMenuOpen(true)} />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <div style={{ padding: '0 20px 0' }}>
        <PantryList list={pantryList} />
      </div>

      <Fab color="primary" aria-label="add" sx={fabStyle}>
        <AddIcon />
      </Fab>
    </div>
  );
}
