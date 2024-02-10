import { Chip, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DataInformation = ({ data, matchesLg }) => {
  const theme = useTheme();
  const items = [
    { label: 'S', color: theme.palette.warning.light, value: '2,00,000' },
    { label: 'P', color: theme.palette.success.light, value: '2,00,000' },
    { label: 'D', color: theme.palette.error.light, value: '2,00,000' },
    { label: 'W', color: theme.palette.info.light, value: '4,00,000' },
    { label: 'B', color: theme.palette.secondary.light, value: '4,00,000' }
  ];

  const dataItems = items?.map((item, index) => {
    return (
      <Grid key={index | item?.label} container sx={{ alignItems: 'center', margin: '0px', width: 'auto !important' }}>
        <Chip variant="combined" label={item?.label} size="small" sx={{ backgroundColor: item?.color }} />
        <Typography variant="h6" sx={{ color: '#707070', fontWeight: '700', marginTop: '0.5px', marginLeft: '0.5rem' }}>
          {item?.value}
        </Typography>
      </Grid>
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
