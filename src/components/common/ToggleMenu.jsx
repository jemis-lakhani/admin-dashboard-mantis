import React, { useState } from 'react';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import InputComponent from 'components/InputComponent';
import { Box, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

const ToggleMenu = ({ value, items }) => {
  const [anchor, setAnchor] = useState(null);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };
  const open = Boolean(anchor);
  const id = open ? 'popover1' : undefined;

  return (
    <div style={{ display: 'inline-flex', gap: 6 }}>
      <span>{value}</span>
      <IconButton aria-label="points" onClick={handleClick} sx={{ height: '24px', width: '24px' }}>
        <SwapVerticalCircleIcon sx={{ fontSize: '1.5em' }} />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchor}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <Box sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5">Title</Typography>
          <FormControl>
            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              {items.map((item, index) => {
                return <FormControlLabel value={item.value} control={<Radio defaultChecked={index == 0} />} label={item.label} />;
              })}
            </RadioGroup>
            <InputComponent sx={{ width: '250px' }}></InputComponent>
            <Stack spacing={1} direction="row-reverse" sx={{ pt: 2 }}>
              <Button disableElevation size="small" color="secondary" variant="contained" onClick={handleClick}>
                Close
              </Button>
              <Button disableElevation size="small" color="primary" variant="contained" sx={{ color: 'white' }}>
                Save
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Popover>
    </div>
  );
};

export default ToggleMenu;
