import { Box, Typography } from '@mui/material';
import axios from 'axios';

// project import
import NavGroup from './NavGroup';
import NavItem from './NavItem';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list`);
        console.log(response.data);
        setMenuItems(response.data);
      } catch (error) {}
    };
    getMenuItems();
  }, []);

  const navGroups = menuItems.map((item) => {
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
