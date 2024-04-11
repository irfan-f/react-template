// settingsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import settings from '../../../info/settings'; // import your settings

const reducers = Object.keys(settings).reduce((acc, key) => {
  acc[`set${key.charAt(0).toUpperCase() + key.slice(1)}`] = (state, action) => {
    state[key].value = action.payload;
  };
  return acc;
}, {});

const settingsSlice = createSlice({
  name: 'settings',
  initialState: settings,
  reducers,
});

export const actions = settingsSlice.actions;

export default settingsSlice.reducer;
