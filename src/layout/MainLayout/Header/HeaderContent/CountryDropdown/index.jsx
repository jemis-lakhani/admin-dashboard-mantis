import { FormControl, MenuItem, Select, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactCountryFlag from 'react-country-flag';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { Popover } from '@mui/material';

const countries = [
  {
    icon: <ReactCountryFlag countryCode="US" style={{ width: '2em', height: '2em' }} svg />,
    value: 'en'
  },
  {
    icon: <ReactCountryFlag countryCode="KR" style={{ width: '2em', height: '2em' }} svg />,
    value: 'ko'
  },
  {
    icon: <ReactCountryFlag countryCode="CN" style={{ width: '2em', height: '2em' }} svg />,
    value: 'zh'
  },
  {
    icon: <ReactCountryFlag countryCode="JP" style={{ width: '2em', height: '2em' }} svg />,
    value: 'ja'
  },
  {
    icon: <ReactCountryFlag countryCode="TH" style={{ width: '2em', height: '2em' }} svg />,
    value: 'th'
  }
];

const CountryDropdown = () => {
  const { i18n } = useTranslation();
  const [country, setCountry] = useState('en');
  const theme = useTheme();
  const bgSecondary = theme.palette.secondary[200];
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    i18n.changeLanguage(country);
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Stack display="flex" direction="row" alignItems="center">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <WatchLaterIcon
          aria-owns={open ? 'time-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          sx={{ height: '100%', cursor: 'pointer', color: '#1976D2' }}
        />
        <Popover
          id="time-popover"
          sx={{
            zIndex: 1500,
            pointerEvents: 'none',
            mt: 1.5,
            '& .MuiPaper-root': { overflow: 'visible', boxShadow: 'none', bgcolor: bgSecondary },
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
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography sx={{ p: 1 }}>(UTC - 10:00) Hawaii</Typography>
        </Popover>
      </div>
      <FormControl
        sx={{
          flexDirection: 'row',
          width: '40px',
          minWidth: '40px',
          maxWidth: '40px',
          alignItems: 'center',
          '& .MuiInputBase-root': { margin: '6px !important' }
        }}
      >
        <Select
          onChange={handleChange}
          inputProps={{ IconComponent: () => null }}
          sx={{
            backgroundColor: theme.palette.secondary[100],
            '& .MuiSelect-select': { padding: '0px 4px !important' }
          }}
          value={country}
          MenuProps={{
            PaperProps: {
              style: {
                marginTop: '1rem'
              }
            }
          }}
        >
          {countries.map((country, key) => (
            <MenuItem value={country.value} key={key}>
              {country.icon}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default CountryDropdown;
