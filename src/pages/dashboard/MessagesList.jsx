import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function MessagesList() {
  const { notifications, notificationCount } = useSelector((state) => state.menu);

  useEffect(() => {}, []);
  return (
    <>
      <Box sx={{ color: 'gray', bgcolor: '#fafafb', p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <div style={{ display: 'flex' }}>
          <MailOutlineIcon sx={{ height: 30, width: 30 }} />
          <Typography sx={{ display: 'inline', fontSize: '1.25rem' }} variant="body">
            New Messages
          </Typography>
        </div>
        <Typography variant="body2">You have {notificationCount} new messages.</Typography>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {notifications?.map((item, index) => {
          return (
            <Box key={index + item?.title}>
              <ListItem
                alignItems="flex-start"
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
            </Box>
          );
        })}
      </List>
    </>
  );
}

export default MessagesList;
