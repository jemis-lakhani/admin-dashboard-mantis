import { useEffect, useState } from 'react';

// material-ui
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// project import
import OrdersTable from './OrdersTable';
import IncomeAreaChart from './IncomeAreaChart';
import SalesColumnChart from './SalesColumnChart';
import MainCard from 'components/MainCard';
import Statistics from 'components/cards/statistics';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MessagesList from './MessagesList';
import { useTranslation } from 'react-i18next';

const DashboardDefault = () => {
  const [slot, setSlot] = useState('week');
  const { t } = useTranslation();

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12}>
        <Typography variant="h5">{t('dashboard.title')}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.views')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="visitors"
          count="42,000"
          percentage={44}
          color="primary"
          extra="35,000"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_users')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="newSingup"
          count="78,250"
          percentage={12}
          isLoss
          color="primary"
          extra="8,900"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_order')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="deposit"
          count="18,800"
          percentage={24}
          color="primary"
          extra="1,943"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_sales')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="send"
          count="$35,078"
          percentage={14}
          color="primary"
          extra="$20,395"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_sales')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="money"
          count="$35,078"
          percentage={4}
          color="primary"
          extra="$20,395"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_sales')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="winning"
          count="$35,078"
          percentage={62}
          isLoss
          color="primary"
          extra="$20,395"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_sales')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="bets"
          count="$35,078"
          percentage={2}
          color="success"
          extra="$20,395"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Statistics
          title={t('dashboard.total_sales')}
          subtitle={t('dashboard.vs_yesterday')}
          icon="connect"
          count="$35,078"
          percentage={14}
          color="primary"
          extra="$20,395"
        />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{t('dashboard.unique_visitor')}</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot('month')}
                color={slot === 'month' ? 'primary' : 'secondary'}
                variant={slot === 'month' ? 'outlined' : 'text'}
              >
                {t('dashboard.month')}
              </Button>
              <Button
                size="small"
                onClick={() => setSlot('week')}
                color={slot === 'week' ? 'primary' : 'secondary'}
                variant={slot === 'week' ? 'outlined' : 'text'}
              >
                {t('dashboard.week')}
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{t('dashboard.income_overview')}</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              {t('dashboard.net_profit')}
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{t('dashboard.recent_orders')}</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">{t('dashboard.all_messages')}</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Accordion defaultExpanded sx={{ maxHeight: 550, overflow: 'auto' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
              {t('dashboard.all_messages')}
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <MessagesList></MessagesList>
            </AccordionDetails>
          </Accordion>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
