// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './settings';
import themeReducer from './theme';

const rootReducer = combineReducers({
  settings: settingsReducer,
  theme: themeReducer,
  // other reducers go here
});

export default rootReducer;
