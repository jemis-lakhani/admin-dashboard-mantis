import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  notificationCount: 0,
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
    notifications(state, action) {
      state.notifications = action.payload.notifications;
      state.notificationCount = action.payload.notifications.length;
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

export const { notifications, menuItems, activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
