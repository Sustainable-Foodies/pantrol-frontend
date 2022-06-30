import React from 'react';
import List from '@mui/material/List';
import PantryItem from './PantryItem';
import { Divider } from '@mui/material';

export default function PantryList ({ list, onItemClick }) {
  return (
    <List>
      {list.map((item) => (
        <div key={item.id}>
          <PantryItem title={item.label} subtitle={item.countdown_label} onClick={() => onItemClick(item)} />
          <Divider />
        </div>
      ))}
    </List>
  )
}