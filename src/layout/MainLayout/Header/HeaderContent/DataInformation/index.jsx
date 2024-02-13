import { Box, Chip, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Popover } from '@mui/material';
import { useState } from 'react';

const DataInformation = ({ data, matchesLg }) => {
  const theme = useTheme();
  const bgSecondary = theme.palette.secondary[200];
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);
  const items = [
    { label: 'S', color: theme.palette.warning.light, value: '2,00,000' },
    { label: 'P', color: theme.palette.success.light, value: '2,00,000' },
    { label: 'D', color: theme.palette.error.light, value: '2,00,000' },
    { label: 'W', color: theme.palette.info.light, value: '4,00,000' },
    { label: 'B', color: theme.palette.secondary.light, value: '4,00,000' }
  ];

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
    borderRadius: '0',
    cursor: 'text',
    userSelect: 'none'
  }));

  const dataItems = items?.map((item, index) => {
    return (
      <Box key={index | item?.label}>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleClose}
          aria-controls={menuOpen ? `detailed-info-${index}` : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
          style={{ zIndex: '1500', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Chip variant="combined" label={item?.label} size="small" sx={{ backgroundColor: item?.color }} />
          <Typography variant="h6" sx={{ color: '#707070', fontWeight: '700', marginTop: '0.5px', marginLeft: '0.5rem' }}>
            {item?.value}
          </Typography>
        </div>
        <Popover
          id={`detailed-info-${index}`}
          open={menuOpen}
          anchorEl={anchorEl}
          sx={{
            zIndex: 1500,
            pointerEvents: 'none',
            mt: 1.5,
            '& .MuiPaper-root': { overflow: 'visible', boxShadow: 'none' },
            '& .MuiPaper-root::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: '2px',
              right: '90%',
              width: 10,
              height: 10,
              bgcolor: bgSecondary,
              transform: 'translateY(-50%) rotate(45deg)'
            }
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handleClose}
          disableRestoreFocus
        >
          <Stack direction="column">
            <Stack direction="row">
              <Item sx={{ backgroundColor: bgSecondary, width: '75px' }}>Total</Item>
              <Item sx={{ minWidth: '100px', textAlign: 'right' }}>10,000,00</Item>
            </Stack>
            <Stack direction="row">
              <Item sx={{ backgroundColor: bgSecondary, width: '75px' }}>Used</Item>
              <Item sx={{ minWidth: '100px', textAlign: 'right' }}>2,00,000</Item>
            </Stack>
            <Stack direction="row">
              <Item sx={{ backgroundColor: bgSecondary, width: '75px' }}>Remain</Item>
              <Item sx={{ minWidth: '100px', textAlign: 'right' }}>8,00,000</Item>
            </Stack>
          </Stack>
        </Popover>
      </Box>
    );
  });
  return (
    <Stack
      direction="row"
      sx={{ width: '100%', ml: '1rem', mr: '1rem', columnGap: '1rem', justifyContent: matchesLg ? 'center' : 'start' }}
    >
      {dataItems}
    </Stack>
  );
};

export default DataInformation;
