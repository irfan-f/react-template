// selectors.ts
import selectTheme, { ThemeState } from '../categories/theme/selector';
import selectSettings from '../categories/settings/selector';
import { SettingsState } from '../../info/settings';
import selectUser, { UserState } from '../categories/user/selector';

const rootSelectors = {
  selectSettings,
  selectTheme,
  selectUser,
};

export interface RootState {
  theme: ThemeState;
  settings: SettingsState;
  user: UserState;
}

export default rootSelectors;
