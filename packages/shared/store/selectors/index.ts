// selectors.ts
const selectSettings = state => state.settings;
const selectTheme = state => state.theme;

const rootSelectors = {
  selectSettings,
  selectTheme,
};

export default rootSelectors;
