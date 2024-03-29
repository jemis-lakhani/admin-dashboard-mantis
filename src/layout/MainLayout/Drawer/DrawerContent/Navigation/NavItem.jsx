import PropTypes from 'prop-types';
import { forwardRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { activeItem } from 'store/reducers/menu';
import CircleIcon from '@mui/icons-material/Circle';

const NavItem = ({ item, level }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { drawerOpen, openItem } = useSelector((state) => state.menu);

  let itemTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  let listItemProps = { component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.MenuPath} target={itemTarget} />) };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.MenuPath, target: itemTarget };
  }

  const itemHandler = (id) => {
    dispatch(activeItem({ openItem: [id] }));
  };

  const itemIcon = item.IconName && item.IconName !== '1' ? item.IconName : false;

  const isSelected = openItem.findIndex((id) => id === item.MenuID) > -1;
  useEffect(() => {
    if (pathname.includes(item.MenuPath)) {
      dispatch(activeItem({ openItem: [item.MenuID] }));
    }
    // eslint-disable-next-line
  }, [pathname]);

  const textColor = 'text.primary';
  const iconSelectedColor = 'primary.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.MenuID)}
      selected={isSelected}
      sx={{
        zIndex: 1201,
        borderRadius: '4px',
        justifyContent: 'space-between',
        pl: drawerOpen && !itemIcon ? `${level * 38}px` : 2,
        py: !drawerOpen && level === 1 ? 1.25 : 1,
        ...(drawerOpen && {
          '&.Mui-selected': {
            backgroundColor: 'transparent',
            '&:hover': {
              backgroundColor: 'primary.lighter'
            }
          }
        })
      }}
    >
      {itemIcon && (
        <ListItemIcon
          sx={{
            minWidth: 28,
            color: isSelected ? iconSelectedColor : textColor,
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
              isSelected && {
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
      {(drawerOpen || (!drawerOpen && level !== 1)) && (
        <ListItemText
          primary={
            <Typography
              variant="h6"
              sx={{ position: 'relative', color: isSelected ? iconSelectedColor : textColor, marginLeft: itemIcon ? '0px' : '10px' }}
            >
              {!itemIcon && isSelected && (
                <CircleIcon sx={{ height: 12, width: 12, position: 'absolute', left: '-1.5rem', top: '0.25rem' }} />
              )}
              {item.MenuName}
            </Typography>
          }
        />
      )}
      {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number
};

export default NavItem;
