import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import Drawer from './Drawer';
import Header from './Header';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import { menuItems, openDrawer } from 'store/reducers/menu';
import axios from 'axios';
import { notifications } from 'store/reducers/menu';

const MainLayout = () => {
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const dispatch = useDispatch();

  const { drawerOpen } = useSelector((state) => state.menu);

  const [open, setOpen] = useState(drawerOpen);
  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  const [navigation, setNavigation] = useState([]);
  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list`);
        dispatch(menuItems({ menuItems: response.data }));
        setNavigation(response.data);
      } catch (error) {}
    };
    getMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list/notifications`);
        dispatch(notifications({ notifications: response?.data }));
      } catch (error) {
        console.log({ error });
      }
    };
    getNotifications();
  }, []);

  useEffect(() => {
    setOpen(!matchDownLG);
    dispatch(openDrawer({ drawerOpen: !matchDownLG }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownLG]);

  useEffect(() => {
    if (open !== drawerOpen) setOpen(drawerOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ width: '100%', mt: matchDownLG ? '78px' : '60px', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Breadcrumbs navigation={navigation} title />
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
