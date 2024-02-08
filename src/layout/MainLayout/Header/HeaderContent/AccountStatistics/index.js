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

const AccountStatistics = ({ data, matchesLg }) => {
  const theme = useTheme();
  const items = [
    { icon: 'deposit', color: theme.palette.error.light, value: '2,00,000' },
    { icon: 'send', color: theme.palette.info.light, value: '2,00,000' },
    { icon: 'user', color: theme.palette.secondary.main, value: '2,00,000' },
    { icon: 'user', color: theme.palette.secondary.main, value: '4,00,000' },
    { icon: 'user', color: theme.palette.secondary.main, value: '4,00,000' },
    { icon: 'user', color: theme.palette.secondary.main, value: '4,00,000' }
  ];

  const dataItems = items?.map((item) => {
    return (
      <Grid container sx={{ alignItems: 'center', margin: '0px', width: 'auto !important' }}>
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: item?.color ? item.color : theme.palette.secondary.light,
            paddingLeft: '8px',
            paddingRight: '8px',
            borderRadius: '4px',
            color: '#FFFFFF'
          }}
        >
          <Avatar variant="rounded" sx={{ backgroundColor: 'transparent', marginRight: '2px', height: '1rem', width: '1rem' }}>
            {icons[item?.icon]}
          </Avatar>
          {item?.value}
        </Typography>
      </Grid>
    );
  });

  return (
    <Stack direction="row" sx={{ width: '100%', ml: '1rem', mr: '1rem', columnGap: '1rem', justifyContent: matchesLg ? 'center' : 'end' }}>
      {dataItems}
    </Stack>
  );
};

export default AccountStatistics;
