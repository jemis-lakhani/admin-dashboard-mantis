import PropTypes from 'prop-types';

import { Avatar, Chip, Grid, Stack, Typography } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TollIcon from '@mui/icons-material/Toll';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import { useTheme } from '@mui/material/styles';

import { useTranslation } from 'react-i18next';

import MainCard from 'components/MainCard';

const icons = {
  visitors: <SupervisedUserCircleOutlinedIcon />,
  newSingup: <PersonAddAltIcon />,
  deposit: <TollIcon />,
  send: <SendOutlinedIcon />,
  money: <AttachMoneyIcon />,
  winning: <EmojiEventsIcon />,
  bets: <GroupsIcon />,
  connect: <ConnectWithoutContactIcon />
};

const Statistics = ({ color, title, subtitle, icon, isLoss, count, percentage }) => {
  const theme = useTheme();
  const error = theme.palette.error.main;
  const success = theme.palette.success.main;
  const textSecondary = theme.palette.secondary.main;
  const { t } = useTranslation();

  return (
    <MainCard contentSX={{ p: 2.25 }} sx={{ position: 'relative' }}>
      <Stack spacing={0.5}>
        <Avatar variant="rounded" sx={{ backgroundColor: '#444444' }}>
          {icons[icon]}
        </Avatar>
        <Grid sx={{ position: 'absolute', top: '1rem', right: '1rem', margin: '0 !important' }}>
          <Chip variant="combined" color={color} label={t('dashboard.today')} size="small" sx={{ color: '#FFFFFF' }} />
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between" marginTop="1rem !important">
          <Grid alignItems="center" justifyContent="space-between" sx={{ flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ color: textSecondary, fontWeight: '700' }}>
              {title}
            </Typography>
            <Typography variant="h3" color="inherit" fontWeight="700">
              {count}
            </Typography>
          </Grid>
          <Grid alignItems="center" justifyContent="space-between" sx={{ flexDirection: 'column' }}>
            <Typography variant="h6" sx={{ color: textSecondary, fontWeight: '700' }}>
              {subtitle}
            </Typography>
            <Typography variant="h3" color={isLoss ? error : success} fontWeight="700">
              {isLoss ? -percentage : percentage}%
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </MainCard>
  );
};

Statistics.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

Statistics.defaultProps = {
  color: 'primary'
};

export default Statistics;
