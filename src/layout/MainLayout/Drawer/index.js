import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer } from '@mui/material';
import DrawerHeader from './DrawerHeader';
import DrawerContent from './DrawerContent';
import { drawerWidth } from 'config';

const MainDrawer = ({ open, handleDrawerToggle, window }) => {
  const theme = useTheme();

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawerContent = useMemo(() => <DrawerContent />, []);
  const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: `1px solid ${theme.palette.divider}`,
            backgroundImage: 'none',
            boxShadow: 'inherit'
          }
        }}
      >
        {open && drawerHeader}
        {open && drawerContent}
      </Drawer>
    </Box>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  window: PropTypes.object
};

export default MainDrawer;
