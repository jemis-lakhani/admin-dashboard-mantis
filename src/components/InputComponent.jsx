import React from 'react';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const InputComponent = ({ sx, rows }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: '140px', ...sx }}>
      <OutlinedInput
        sx={
          !rows
            ? {
                '& .MuiOutlinedInput-input': {
                  p: '4px',
                  pl: 2
                }
              }
            : {}
        }
        placeholder=""
        value={value}
        onChange={handleChange}
        size="small"
        rows={rows}
        multiline={rows ? true : false}
      />
    </FormControl>
  );
};

export default InputComponent;
