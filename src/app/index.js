import React, { useState } from "react";
import ToolbarHeader from "./ToolbarHeader";
import SideMenu from "./SideMenu";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <ToolbarHeader title="Pantrol" onMenuClick={() => setIsMenuOpen(true)} />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      <Fab color="primary" aria-label="add" sx={fabStyle}>
        <AddIcon />
      </Fab>
    </div>
  );
}
