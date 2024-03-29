import { Avatar, Box, Button, Grid, IconButton, Typography, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import Notification from './Notification';
import DataInformation from './DataInformation/index';
import AccountStatistics from './AccountStatistics/index';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import CountryDropdown from './CountryDropdown/index';

const HeaderContent = () => {
  const { t } = useTranslation();
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down('md'));
  const matchesLg = useMediaQuery((theme) => theme.breakpoints.down('xl'));
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}admin/login/logout`,
        {},
        {
          withCredentials: true
        }
      );
      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* Number of members */}
      <Grid display="flex" alignItems="center">
        <Avatar variant="rounded" sx={{ bgcolor: 'transparent' }}>
          <AccountCircleOutlinedIcon sx={{ color: 'gray' }} />
        </Avatar>
        <Typography variant="h6" sx={{ color: '#707070', fontWeight: '700', mt: '1px' }}>
          1
        </Typography>
      </Grid>

      {/* Account Data */}
      {!matchesXs && (
        <Stack
          display="flex"
          direction="row"
          sx={{
            width: '100%',
            flexWrap: matchesLg ? 'wrap' : 'none',
            rowGap: matchesLg ? '1rem' : 0
          }}
        >
          <DataInformation data={{}} matchesLg={matchesLg} />
          <AccountStatistics data={{}} matchesLg={matchesLg} />
        </Stack>
      )}

      {matchesXs && <Box sx={{ width: '100%', ml: 1 }} />}

      {/* Time  & County Dropdown */}
      <CountryDropdown />

      {/* Notifications */}
      <Notification />

      {/* Download */}
      <IconButton disableRipple color="secondary" title="Download" sx={{ color: 'text.primary', mx: 0.5 }}>
        <DownloadForOfflineOutlinedIcon sx={{ color: 'gray' }} />
      </IconButton>

      {/* Logout */}
      <Button
        onClick={handleLogout}
        variant="outlined"
        size="small"
        sx={{
          color: 'text.primary',
          padding: '0px',
          px: '1.75rem !important',
          py: '0',
          borderRadius: '16px',
          borderWidth: '2px',
          borderColor: 'gray',
          fontWeight: '700',
          width: 'auto',
          mx: 0.5,
          '&:hover': {
            bgcolor: theme.palette.grey[300],
            borderRadius: '16px',
            borderWidth: '2px',
            borderColor: 'gray'
          }
        }}
      >
        {t('common.logout')}
      </Button>
    </>
  );
};

export default HeaderContent;
