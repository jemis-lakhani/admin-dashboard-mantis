import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckBoxGroup = ({ items }) => {
  return (
    <FormGroup>
      <div>
        {items?.map((item, index) => {
          return (
            <FormControlLabel
              control={<Checkbox defaultChecked={index === 0} disableRipple />}
              label={item?.label ? item.label : ''}
              sx={{
                m: 0,
                mr: 2,
                '& .MuiCheckbox-root': {
                  p: '0 !important'
                }
              }}
            />
          );
        })}
      </div>
    </FormGroup>
  );
};

export default CheckBoxGroup;
