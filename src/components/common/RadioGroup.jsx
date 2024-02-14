import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioGroupComponent = ({ items, value: defaultValue }) => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <div>
          {items?.map((item) => {
            return (
              <FormControlLabel
                value={item.value}
                control={<Radio disableRipple />}
                label={item?.label ? item.label : ''}
                sx={{
                  m: 0,
                  mr: 2,
                  '& .MuiRadio-root ': {
                    p: '0 !important'
                  }
                }}
              />
            );
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupComponent;
