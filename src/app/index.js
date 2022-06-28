import React, { useState } from 'react';
import ToolbarHeader from './ToolbarHeader';
import SideMenu from './SideMenu'

export default function App () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <ToolbarHeader title="Pantrol" onMenuClick={() => setIsMenuOpen(true)} />
      <SideMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </div>
  )
} 