import React from 'react';
import List from '@mui/material/List';
import PantryItem from './PantryItem';

export default function PantryList ({ list }) {
  return (
    <List>
      {list.map(({id, ...item}) => (
        <div key={id} style={{ borderBottom: '1px solid #CFCFCF' }}>
          <PantryItem {...item} />
        </div>
      ))}
    </List>
  )
}