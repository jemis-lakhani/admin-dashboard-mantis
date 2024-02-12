import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { notificationsCount } from 'store/reducers/menu';
import axios from 'axios';

function MessagesList() {
  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotifications = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}menu/list/notifications`);
        setNotifications(response.data);
        setTotal(response.data?.length);
        dispatch(notificationsCount({ notificationsCount: response.data?.length }));
      } catch (error) {
        console.log({ error });
      }
    };
    getNotifications();
  }, []);
  return (
    <>
      <Box sx={{ color: 'gray', bgcolor: '#fafafb', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <div style={{ display: 'flex' }}>
          <MailOutlineIcon sx={{ height: 30, width: 30 }} />
          <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} variant="body">
            New Messages
          </Typography>
        </div>
        <Typography variant="body2">You have {total} new messages.</Typography>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {notifications?.map((item, index) => {
          return (
            <>
              <ListItem
                alignItems="flex-start"
                key={index + item.title}
                secondaryAction={
                  <Typography sx={{ display: 'inline' }} component="span" variant="body2">
                    {'1m ago'}
                  </Typography>
                }
              >
                <ListItemText
                  primary={item.title}
                  secondary={
                    <>
                      <Typography sx={{ display: 'inline' }} component="span" variant="body2" color="#666666">
                        {item.body}
                      </Typography>
                      <br />
                      {item.date}
                    </>
                  }
                />
              </ListItem>
              <Divider component="li" />
            </>
          );
        })}
      </List>
    </>
  );
}

export default MessagesList;
