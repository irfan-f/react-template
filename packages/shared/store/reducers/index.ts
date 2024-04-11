// reducers.ts
import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from '../categories/settings/reducer';
import themeReducer from '../categories/theme/reducer';
import userReducer from '../categories/user/reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
