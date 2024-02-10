import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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

export const { menuItems, activeItem, activeComponent, openDrawer, openComponentDrawer } = menu.actions;
