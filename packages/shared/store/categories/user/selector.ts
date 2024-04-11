import { RootState } from '../../selectors';

export interface UserState {
  loggedIn: boolean;
  twoFactor: boolean;
  twoFactorVerified: boolean;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  rank: string
}

const selectUser: (state: RootState) => UserState = state => state.user;

export default selectUser;
