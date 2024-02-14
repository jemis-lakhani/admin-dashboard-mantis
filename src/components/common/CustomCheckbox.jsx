import React, { useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, useTheme } from '@mui/material';

const inputStyle = {
  p: '4px 14px 4px 12px'
};

const CustomCheckbox = ({ items }) => {
  const theme = useTheme();
  const secondaryMain = theme.palette.secondary.main;
  const secondary400 = theme.palette.secondary[400];
  const secondary600 = theme.palette.secondary[600];
  const [checkedStatus, setCheckedStatus] = useState({});

  const handleChange = (status) => (event) => {
    setCheckedStatus({
      ...checkedStatus,
      [status]: event.target.checked
    });
  };

  return (
    <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
      {items.map((item) => (
        <FormControlLabel
          key={item}
          control={<Checkbox checked={checkedStatus[item] || false} onChange={handleChange(item)} sx={{ display: 'none' }} />}
          label={item}
          sx={{
            ...inputStyle,
            m: '0',
            color: checkedStatus[item] ? 'white' : secondaryMain,
            border: `1px solid ${secondary400}`,
            borderRadius: '4px',
            backgroundColor: checkedStatus[item] ? secondary600 : 'trasnparent',
            userSelect: 'none'
          }}
        />
      ))}
    </FormGroup>
  );
};

export default CustomCheckbox;
