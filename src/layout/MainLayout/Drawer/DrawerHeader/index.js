import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import Logo from 'components/Logo';

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="column" spacing={2} alignItems="center" sx={{ pt: '2em' }}>
        <Logo />
        <span>James(manager)</span>
      </Stack>
    </DrawerHeaderStyled>
  );
};

DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
