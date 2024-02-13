import { Box, Typography } from '@mui/material';

// project import
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const menuItems = useSelector((state) => state.menu.menuItems);

  const navGroups = menuItems?.map((item) => {
    switch (item.type) {
      case 'group':
        return <NavGroup key={item.id} item={item} />;
      case 'single-item':
        return <NavItem key={item.id} item={item} level={1} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return <Box sx={{ pt: 2, mx: 1 }}>{navGroups}</Box>;
};

export default Navigation;
