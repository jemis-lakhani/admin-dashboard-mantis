import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notificationsCount: 0,
  menuItems: [],
  openItem: ['dashboard'],
  defaultId: 'dashboard',
  openComponent: 'buttons',
  drawerOpen: false,
  componentDrawerOpen: true
};

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    notificationsCount(state, action) {
      state.notificationsCount = action.payload.notificationsCount;
    },
    menuItems(state, action) {
      state.menuItems = action.payload.menuItems;
    },
    activeItem(state, action) {
      state.openItem = action.payload.openItem;
    },

    activeComponent(state, action) {
      state.openComponent = action.payload.openComponent;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload.drawerOpen;
    },

    openComponentDrawer(state, action) {
      state.componentDrawerOpen = action.payload.componentDrawerOpen;
    }
  }
});

export default menu.reducer;

export const { notificationsCount, menuItems, activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
