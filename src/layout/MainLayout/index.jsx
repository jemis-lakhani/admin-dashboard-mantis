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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const MainLayout = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownLG = useMediaQuery(theme.breakpoints.down('lg'));
  const { drawerOpen } = useSelector((state) => state.menu);
  const [open, setOpen] = useState(drawerOpen);
  const [navigation, setNavigation] = useState([]);
  const [notificationsArray, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
    dispatch(openDrawer({ drawerOpen: !open }));
  };

  useEffect(() => {
    const authenticateSession = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}admin/setting`,
          {},
          {
            withCredentials: true
          }
        );
        if (response.status !== 200) {
          navigate('/login');
        }
      } catch (error) {
        navigate('/login');
        console.error({ error });
      }
    };

    const timer = setInterval(() => {
      authenticateSession();
    }, 1 * 30000); // 30 seconds
    authenticateSession();

    return () => clearInterval(timer);
  }, []);

  const showToast = (notification) => {
    if (notification.type === 'success') {
      toast.success(
        <div>
          <strong>{notification.title}</strong>
          <br />
          {notification.body}
        </div>,
        {
          position: 'bottom-right'
        }
      );
    } else if (notification.type === 'warning') {
      toast.warning(
        <div>
          <strong>{notification.title}</strong>
          <br />
          {notification.body}
        </div>,
        {
          position: 'bottom-right'
        }
      );
    } else if (notification.type === 'error') {
      toast.error(
        <div>
          <strong>{notification.title}</strong>
          <br />
          {notification.body}
        </div>,
        {
          position: 'bottom-right'
        }
      );
    } else {
      toast.info(
        <div>
          <strong>{notification.title}</strong>
          <br />
          {notification.body}
        </div>,
        {
          position: 'bottom-right'
        }
      );
    }
  };

  useEffect(() => {
    const getMenuItems = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list`, {
          withCredentials: true
        });
        dispatch(menuItems({ menuItems: response.data }));
        setNavigation(response.data);
      } catch (error) {
        console.log({ error });
      }
    };
    getMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list/notifications`, {
          withCredentials: true
        });
        dispatch(notifications({ notifications: response?.data }));
        setNotifications(response?.data);
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

  useEffect(() => {
    notificationsArray?.map((notification) => {
      showToast(notification);
    });
  }, [notificationsArray]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Header open={open} handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Drawer open={open} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ width: '100%', mt: matchDownLG ? '78px' : '60px', flexGrow: 1, p: { xs: 2, sm: 3 } }}>
          <Breadcrumbs navigation={navigation} title />
          <Box>
            <Outlet />
            <ToastContainer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
