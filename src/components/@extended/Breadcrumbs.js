import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import { Grid, Typography } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MainCard from '../MainCard';

const Breadcrumbs = ({ navigation, title, ...others }) => {
  const location = useLocation();
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
    navigation?.map((menu) => {
      if (menu.type && menu.type === 'group') {
        getCollapse(menu);
      }
      return false;
    });
  });

  if (location.pathname === '/') {
    location.pathname = '/';
  }

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = '';

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
      <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard border={false} sx={{ mb: 3, bgcolor: 'transparent' }} {...others} content={false}>
          <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <HomeOutlinedIcon sx={{ pt: '2px' }} />
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
  navigation: PropTypes.object,
  title: PropTypes.bool
};

export default Breadcrumbs;
