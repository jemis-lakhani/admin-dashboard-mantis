import React from 'react';
import { Button, Stack, useTheme } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateRangeComponent = () => {
  const theme = useTheme();
  const inputStyle = {
    p: '4px 14px 4px 12px'
  };
  const containedBtnStyle = {
    ml: '0.5rem',
    p: '2px 10px',
    fontSize: '0.75rem',
    minWidth: '50px',
    color: '#FFFFFF',
    backgroundColor: theme.palette.secondary[600],
    '&:hover': {
      backgroundColor: theme.palette.secondary[600]
    }
  };
  return (
    <>
      <Stack direction="row" alignItems="center">
        <label style={{ color: '#666666', fontWeight: '600', marginRight: '0.5rem' }}>Date</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '100%', overflow: 'hidden' }}>
            <DemoItem>
              <DatePicker
                sx={{
                  '& .MuiInputBase-input': inputStyle
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <label style={{ margin: '0 0.5rem' }}>-</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']} sx={{ pt: '0', maxWidth: '100%', overflow: 'hidden' }}>
            <DemoItem>
              <DatePicker
                sx={{
                  '& .MuiInputBase-input': inputStyle
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
        <Button variant="contained" size="small" sx={containedBtnStyle} disableRipple>
          search
        </Button>
      </Stack>
    </>
  );
};

export default DateRangeComponent;
