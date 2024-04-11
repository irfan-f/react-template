// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './settings';
import themeReducer from './theme';
import userReducer from './user';

const rootReducer = combineReducers({
  settings: settingsReducer,
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
