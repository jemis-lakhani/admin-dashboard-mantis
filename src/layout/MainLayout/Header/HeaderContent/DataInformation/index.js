import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const DataInformation = ({ data, matchesLg }) => {
  const theme = useTheme();
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
  const handleClose = (event) => {
    setAnchorEl(null);
    // setAnchorEl(event.currentTarget);
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
        <Grid
          container
          onMouseOver={handleHover}
          onMouseLeave={handleClose}
          aria-controls={menuOpen ? 'detailed-info' : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? 'true' : undefined}
          sx={{ alignItems: 'center', margin: '0px', width: 'auto !important' }}
        >
          <Chip variant="combined" label={item?.label} size="small" sx={{ backgroundColor: item?.color, cursor: 'pointer' }} />
          <Typography
            variant="h6"
            sx={{ color: '#707070', fontWeight: '700', marginTop: '0.5px', marginLeft: '0.5rem', cursor: 'pointer' }}
          >
            {item?.value}
          </Typography>
        </Grid>
        <Menu
          anchorEl={anchorEl}
          id="detailed-info"
          open={menuOpen}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              mt: 3,
              '& .MuiList-root': { p: '0 !important' },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0
              }
            }
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem sx={{ p: '0' }}>
            <Stack direction="column">
              <Stack direction="row">
                <Item sx={{ backgroundColor: theme.palette.secondary[200], width: '75px' }}>Total</Item>
                <Item sx={{ minWidth: '100px', textAlign: 'right' }}>10,000,00</Item>
              </Stack>
              <Stack direction="row">
                <Item sx={{ backgroundColor: theme.palette.secondary[200], width: '75px' }}>Used</Item>
                <Item sx={{ minWidth: '100px', textAlign: 'right' }}>2,00,000</Item>
              </Stack>
              <Stack direction="row">
                <Item sx={{ backgroundColor: theme.palette.secondary[200], width: '75px' }}>Remain</Item>
                <Item sx={{ minWidth: '100px', textAlign: 'right' }}>8,00,000</Item>
              </Stack>
            </Stack>
          </MenuItem>
        </Menu>
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
