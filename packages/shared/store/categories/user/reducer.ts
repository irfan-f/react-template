// userSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const defaultState = {
  loggedIn: false,
  twoFactor: false,
  twoFactorVerified: false,
  userName: '',
  firstName: '',
  lastName: '',
  email: '',
  image: '',
  rank: 'rookie',
};

const userSlice = createSlice({
  name: 'theme',
  initialState: {
    ...defaultState
  },
  reducers: {
    setUserData: (state, action) => {
      // Loop through the payload and set the state
      // Redux toolkit will take care of immutability
      // Change for web implementation
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      return defaultState;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(create.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
  }
});

export const login = createAsyncThunk('user/login', async (payload: { email: string; password: string }) => {
  return {
    userName: payload.email,
    firstName: '',
    lastName: '',
    email: '',
    image: 'https://avatars.githubusercontent.com/u/1013380?v=4',
    rank: 'rookie',
    loggedIn: true,
    twoFactor: false,
    twoFactorVerified: false,
  };
});


export const logout = createAsyncThunk('user/logout', async () => {
  // Implement your API call here
  return true;
});

export const create = createAsyncThunk('user/create', async (payload: { email: string; password: string }) => {
  // Implement your API call here
  return {
    userName: payload.email,
    firstName: '',
    lastName: '',
    email: '',
    image: 'https://avatars.githubusercontent.com/u/1013380?v=4',
    rank: 'rookie',
    loggedIn: true,
    twoFactor: false,
    twoFactorVerified: false,
  };
});

export const actions = userSlice.actions;

export default userSlice.reducer;