import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const DrawerHeaderStyled = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  ...theme.mixins.toolbar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  marginBottom: '0.5rem'
}));

export default DrawerHeaderStyled;
