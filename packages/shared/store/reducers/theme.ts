// themeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultColors, setColors, defaultStyles, setStyles } from '../../content/styles/index'; // import your colors
import type { Colors, Styles } from '../../content/styles/index'; // import your colors
import { Appearance } from 'react-native';

export type Theme = 'light' | 'dark' | 'auto';
export type ThemeActionPayload = { theme: Theme }

interface ThemeState {
  theme: Theme;
  colors: Colors; // Colors is imported from your existing file
  styles: Styles; // Styles is imported from your existing file
}

const initialState: ThemeState = {
  theme: Appearance.getColorScheme() || 'light',
  colors: defaultColors, // Initialize with default colors
  styles: defaultStyles, // Initialize with default styles
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeActionPayload>) => {
      const passedInTheme = action.payload.theme;
      const themeToSet = passedInTheme === 'auto' ? Appearance.getColorScheme() || 'light' : passedInTheme;
      const colorsToSet = { primary: state.colors.primary };
      const newColors = setColors({ colorsToSet, themeToSet})
      const newStyles = setStyles(newColors);
      state.colors = newColors;
      state.styles = newStyles;
      state.theme = themeToSet;
    },
    setColor: (state, action: PayloadAction<Colors | any>) => {
      const colorsToSet = action.payload;
      const themeToSet =  state.theme === 'auto' ? Appearance.getColorScheme() || 'light' : state.theme;
      const newColors = setColors({ colorsToSet, themeToSet});
      const newStyles = setStyles(newColors);
      state.colors = newColors;
      state.styles = newStyles;
    },
  },
});

export const actions = themeSlice.actions;

export default themeSlice.reducer;