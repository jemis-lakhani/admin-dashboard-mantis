import PropTypes from 'prop-types';
import { List, Typography, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

import NavItem from './NavItem';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const textColor = 'text.primary';
const iconSelectedColor = 'white';

const NavGroup = ({ item }) => {
  const { drawerOpen } = useSelector((state) => state.menu);
  const [open, setOpen] = useState(false);
  const [isChildActive, setisChildActive] = useState(false);
  const { pathname } = useLocation();

  const itemIcon = item.icon ? item.icon : false;

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const childrenUrls = item.children.map((child) => child?.url);
    if (childrenUrls.includes(pathname)) {
      setisChildActive(true);
    } else {
      setisChildActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navCollapse = item.children?.map((menuItem) => {
    switch (menuItem.type) {
      case 'item':
        return <NavItem key={menuItem.id} item={menuItem} level={1} />;
      default:
        return (
          <Typography key={menuItem.id} variant="h6" color="error" align="center">
            Fix - Group Collapse or Items
          </Typography>
        );
    }
  });

  return (
    <List
      sx={{
        py: 0,
        zIndex: 0
      }}
    >
      <ListItemButton
        className="parent"
        onClick={handleClick}
        sx={{
          zIndex: 1201,
          borderRadius: '4px',
          justifyContent: 'space-between',
          ...(drawerOpen &&
            isChildActive && {
              ...{
                bgcolor: 'primary.main',
                color: iconSelectedColor,
                '&:hover': {
                  color: iconSelectedColor,
                  bgcolor: 'primary.main'
                }
              }
            })
        }}
      >
        {itemIcon && (
          <ListItemIcon
            sx={{
              minWidth: 28,
              color: isChildActive ? iconSelectedColor : textColor,
              ...(!drawerOpen && {
                borderRadius: 1.5,
                width: 36,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  bgcolor: 'secondary.lighter'
                }
              }),
              ...(!drawerOpen &&
                isChildActive && {
                  bgcolor: 'primary.lighter',
                  '&:hover': {
                    bgcolor: 'primary.lighter'
                  }
                })
            }}
          >
            <span className="material-symbols-rounded">{itemIcon}</span>
          </ListItemIcon>
        )}
        <ListItemText
          primary={
            <Typography variant="h6" sx={{ color: isChildActive ? iconSelectedColor : textColor }}>
              {item.title}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {navCollapse}
        </List>
      </Collapse>
    </List>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object
};

export default NavGroup;
