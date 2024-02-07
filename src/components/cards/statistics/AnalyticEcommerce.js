import PropTypes from 'prop-types';

import { Avatar, Chip, Grid, Stack, Typography } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';

import MainCard from 'components/MainCard';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticEcommerce = ({ color, title, count, percentage }) => (
  <MainCard contentSX={{ p: 2.25 }} sx={{ position: 'relative' }}>
    <Stack spacing={0.5}>
      <Avatar variant="rounded">
        <AssignmentIcon />
      </Avatar>

      {percentage && (
        <Grid sx={{ position: 'absolute', top: '1rem', right: '1rem', margin: '0 !important' }}>
          <Chip variant="combined" color={color} label="Today" size="small" sx={{ borderRadius: '16px' }} />
        </Grid>
      )}
      <Grid container alignItems="center" justifyContent="space-between" marginTop="1rem !important">
        <Grid item>
          <Typography variant="h4" color="inherit" fontWeight="400">
            {count}
          </Typography>
        </Grid>
        <Typography variant="h5">{title}</Typography>
        <Grid item>
          <Typography variant="h4" color="inherit" fontWeight="400">
            {count}
          </Typography>
        </Grid>
      </Grid>
    </Stack>

    {/* <Box sx={{ p: 2.25 }}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Avatar
                variant="rounded"
                sx={{
                  ...theme.typography.commonAvatar,
                  ...theme.typography.largeAvatar,
                  backgroundColor: theme.palette.primary[800],
                  color: '#fff',
                  mt: 1
                }}
              >
                <LocalMallOutlinedIcon fontSize="inherit" />
              </Avatar>
            </Grid>
            <Grid item>
              <Button
                disableElevation
                // variant={timeValue ? 'contained' : 'text'}
                variant={'text'}
                size="small"
                sx={{ color: 'inherit' }}
                onClick={(e) => handleChangeTime(e, true)}
              >
                Month
              </Button>
              <Button
                disableElevation
                // variant={!timeValue ? 'contained' : 'text'}
                variant={'text'}
                size="small"
                sx={{ color: 'inherit' }}
                onClick={(e) => handleChangeTime(e, false)}
              >
                Year
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ mb: 0.75 }}>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>$961</Typography>
                </Grid>
                <Grid item>
                  <Avatar
                    sx={{
                      ...theme.typography.smallAvatar,
                      cursor: 'pointer',
                      backgroundColor: theme.palette.primary[200],
                      color: theme.palette.primary.dark
                    }}
                  >
                    <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                  </Avatar>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: theme.palette.primary[200]
                    }}
                  >
                    Total Order
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box> */}
  </MainCard>
);

AnalyticEcommerce.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.string,
  percentage: PropTypes.number,
  isLoss: PropTypes.bool,
  extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

AnalyticEcommerce.defaultProps = {
  color: 'primary'
};

export default AnalyticEcommerce;
