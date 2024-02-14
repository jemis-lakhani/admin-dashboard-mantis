import React from 'react';
import { Avatar, Grid, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TollIcon from '@mui/icons-material/Toll';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import GroupsIcon from '@mui/icons-material/Groups';

const icons = {
  visitors: <SupervisedUserCircleOutlinedIcon sx={{ height: '100%' }} />,
  newSingup: <PersonAddAltIcon sx={{ height: '100%' }} />,
  deposit: <TollIcon sx={{ height: '100%' }} />,
  send: <SendOutlinedIcon sx={{ height: '100%' }} />,
  money: <AttachMoneyIcon sx={{ height: '100%' }} />,
  winning: <EmojiEventsIcon sx={{ height: '100%' }} />,
  bets: <GroupsIcon sx={{ height: '100%' }} />,
  connect: <ConnectWithoutContactIcon sx={{ height: '100%' }} />
};

const ChipComponent = ({ variant, icon, value }) => {
  const theme = useTheme();
  const color = {
    primary: theme.palette.primary.main,
    info: theme.palette.info.main,
    error: theme.palette.error.main,
    success: theme.palette.success.main,
    secondary: theme.palette.secondary.main,
    warning: theme.palette.warning.main
  };

  return (
    <Grid container sx={{ alignItems: 'center', margin: '0px', width: 'auto !important' }}>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: variant ? color[variant] : theme.palette.secondary.light,
          px: '1rem',
          py: '0.1rem',
          borderRadius: '4px',
          color: '#FFFFFF'
        }}
      >
        {icon ? (
          <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', mr: '6px', height: '1rem', width: '1rem' }}>
            {icons[icon]}
          </Avatar>
        ) : (
          ''
        )}

        {value}
      </Typography>
    </Grid>
  );
};

export default ChipComponent;
