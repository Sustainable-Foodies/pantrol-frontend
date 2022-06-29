import React from 'react';
import List from '@mui/material/List';
import PantryItem from './PantryItem';
import { Divider } from '@mui/material';

export default function PantryList ({ list }) {
  return (
    <List>
      {list.map(({id, ...item}) => (
        <div key={id}>
          <PantryItem {...item} />
          <Divider />
        </div>
      ))}
    </List>
  )
}