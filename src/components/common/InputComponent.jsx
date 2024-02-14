import React, { useState } from 'react';
import { FormControl, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const inputStyle = {
  p: '4px 14px 4px 12px'
};

const InputComponent = ({ classeName, value, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FormControl sx={{ width: '100%' }}>
      {isPassword ? (
        <OutlinedInput
          type={showPassword ? 'text' : 'password'}
          value={value}
          placeholder="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleTogglePasswordVisibility} edge="end" disableRipple>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          sx={{
            '& .MuiInputBase-input': inputStyle
          }}
        />
      ) : (
        <OutlinedInput
          value={value}
          classeName={classeName}
          placeholder="Input"
          sx={{
            '& .MuiInputBase-input': inputStyle
          }}
        />
      )}
    </FormControl>
  );
};

export default InputComponent;
