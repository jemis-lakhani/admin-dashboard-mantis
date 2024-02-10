import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectComponent = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: '140px' }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        sx={{
          '& .MuiSelect-select': {
            p: '4px 14px 4px 12px'
          }
        }}
      >
        <MenuItem value="">None</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
