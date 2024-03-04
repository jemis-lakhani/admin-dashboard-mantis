import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

const selectStyle = {
  p: '4px 14px 4px 12px'
};

const SelectComponent = ({ className, items, size }) => {
  const { t, i18n } = useTranslation();
  console.log(t(`member_list.one`));
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
          const displayText = i18n.exists(`select_item.${item.label}`) ? t(`select_item.${item.label}`) : item.label;
          return <MenuItem value={item.value}>{displayText}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default SelectComponent;
