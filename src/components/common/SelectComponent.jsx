import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

const selectStyle = {
  p: '4px 14px 4px 12px'
};

const SelectComponent = ({ className, items, size }) => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <Select
        className={className}
        value={items ? items[0].value : ''}
        displayEmpty
        sx={{
          '& .MuiSelect-select': selectStyle
        }}
      >
        {items?.map((item) => {
          return <MenuItem value={item.value}>{item.label}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
