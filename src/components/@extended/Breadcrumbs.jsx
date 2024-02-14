import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MainCard from '../MainCard';

const Breadcrumbs = ({ navigation, title, ...others }) => {
  const location = useLocation();
  const menuItems = useSelector((state) => state.menu.menuItems);
  const [main, setMain] = useState();
  const [item, setItem] = useState();

  // set active item state
  const getCollapse = (menu) => {
    if (menu.children) {
      menu.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === 'item') {
          if (location.pathname === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setMain({});
      setItem({});
      return;
    }
    menuItems?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  }, [location.pathname, menuItems]);

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';
  let itemHeader = '';

  if (main && main.type === 'group') {
    mainContent = (
      <Typography variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
        {main.title}
      </Typography>
    );
  }

  // items
  if (item && item.type === 'item') {
    itemTitle = item.title;
    itemContent = (
      <Typography variant="h6" sx={{ textDecoration: 'none' }} color="textSecondary">
        {itemTitle}
      </Typography>
    );
    itemHeader = (
      <Typography variant="h4" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false} sx={{ mb: 1, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={1} m={0} sx={{ width: '100%' }}>
            <Grid item sx={{ p: '0 !important' }}>
              {itemHeader}
            </Grid>
            <Grid item sx={{ p: '0 !important' }}>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <HomeOutlinedIcon sx={{ mt: '4px', height: '1.25rem', width: '1.25rem' }} />
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
};

Breadcrumbs.propTypes = {
  navigation: PropTypes.array,
  title: PropTypes.bool
};

export default Breadcrumbs;
