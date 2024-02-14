import React from 'react';
import { Grid, Stack, useMediaQuery, useTheme } from '../../../node_modules/@mui/material/index';
import DateRangeComponent from './DateRangeComponent';
import CustomCheckbox from './CustomCheckbox';
import SelectComponent from './SelectComponent';
import InputComponent from './InputComponent';

const memberStatusFilter = ['Membership', 'Black', 'Stop', 'withdrawal', 'Email'];
const items = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' }
];

const MemberListFilter = () => {
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
