// selectors.ts
const selectSettings = state => state.settings;
const selectTheme = state => state.theme;
const selectUser = state => state.user;

const rootSelectors = {
  selectSettings,
  selectTheme,
  selectUser,
};

export default rootSelectors;
