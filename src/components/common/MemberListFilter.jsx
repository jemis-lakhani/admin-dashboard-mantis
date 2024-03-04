import React, { useTransition } from 'react';
import { Grid, Stack, useMediaQuery, useTheme } from '../../../node_modules/@mui/material/index';
import DateRangeComponent from './DateRangeComponent';
import CustomCheckbox from './CustomCheckbox';
import SelectComponent from './SelectComponent';
import InputComponent from './InputComponent';
import { useTranslation } from 'react-i18next';

const memberStatusFilter = ['membership', 'black', 'stop', 'withdrawal', 'email'];
const items = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
  { value: 4, label: 'four' },
  { value: 5, label: 'five' }
];

const MemberListFilter = () => {
  const { t } = useTransition();
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Grid container sx={{ ml: '-0.5rem', mt: 0, width: 'calc(100% + 0.5rem)', alignItems: 'center' }}>
      <Grid item xs={12} md={6} lg={3} xl={3}>
        <Stack direction="row">
          <Grid item xs={6} sx={{ p: '0.5rem' }}>
            <SelectComponent items={items} />
          </Grid>
          <Grid item xs={6} sx={{ p: '0.5rem' }}>
            <InputComponent />
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} xl={4} sx={{ p: '0.5rem' }}>
        <DateRangeComponent />
      </Grid>
      <Grid item xs={12} sm={12} md lg={5} xl={5} sx={{ p: '0.5rem', pr: 0 }}>
        <Stack direction="row" sx={{ columnGap: '0.5rem', justifyContent: mediumScreen ? 'start' : 'end' }}>
          <CustomCheckbox items={memberStatusFilter} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MemberListFilter;
