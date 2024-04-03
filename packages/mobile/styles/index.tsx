import { StatusBarStyle, StyleSheet } from 'react-native';
import tinycolor from 'tinycolor2';
let theme = 'light';
/**
 * Colors object that contains all the colors used in the app
 */
export interface Colors {
  white: string;
  black: string;
  text: string;
  detail: string;
  primary: string;
  primaryShade: string;
  primaryTint: string;
  secondary: string;
  secondaryShade: string;
  secondaryTint: string;
  tertiary: string;
  tertiaryShade: string;
  tertiaryTint: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  background: string;
  backgroundOpposite: string;
  enabledButtonBackground: string;
  disabledButtonBackground: string;
  activeButtonBorder: string;
  enabledButtonBorder: string;
  disabledButtonBorder: string;
  activeButtonBackground: string;
  barStyle: StatusBarStyle;
}
let colors: Colors;

const white = '#ffffff';
const grey = '#9e9e9e';
const black = '#000000';

const setColors = (
  colorsToSet = {
    primary: '#009688',
  },
): void => {
  const isDarkMode = theme === 'dark';

  const primaryColor = tinycolor(colorsToSet.primary);
  const scheme = primaryColor.splitcomplement();

  const primary = primaryColor.toHexString();
  const primaryShade = primaryColor.darken(10).toHexString();
  const primaryTint = primaryColor.lighten(10).toHexString();

  const secondaryColor = scheme[1];
  const secondary = secondaryColor.toHexString();
  const secondaryShade = secondaryColor.darken(10).toHexString();
  const secondaryTint = secondaryColor.lighten(10).toHexString();

  const tertiaryColor = scheme[2];
  const tertiary = tertiaryColor.toHexString();
  const tertiaryShade = tertiaryColor.darken(10).toHexString();
  const tertiaryTint = tertiaryColor.lighten(10).toHexString();

  const textColor = tinycolor(isDarkMode ? white : black);
  const text = textColor.toHexString();
  const greyColor = tinycolor(grey);
  const detail = isDarkMode
    ? greyColor.darken(10).toHexString()
    : greyColor.lighten(10).toHexString();

  colors = {
    // Base colors
    white,
    black,

    // Text Colors
    text,
    detail,

    // Primary colors
    primary,
    primaryShade,
    primaryTint,

    // Secondary colors
    secondary,
    secondaryShade,
    secondaryTint,

    // Tertiary colors
    tertiary,
    tertiaryShade,
    tertiaryTint,

    // Status colors
    success: '#4caf50',
    warning: '#ffeb3b',
    danger: '#f44336',
    info: '#2196f3',

    // Background colors
    background: isDarkMode ? '#000000' : '#ffffff',
    backgroundOpposite: isDarkMode ? '#ffffff' : '#000000',

    // Bar Style
    barStyle: isDarkMode ? 'dark-content' : 'light-content',

    // Button colors
    enabledButtonBackground: primary,
    activeButtonBackground: primaryTint,
    disabledButtonBackground: primaryShade,
    enabledButtonBorder: primary,
    disabledButtonBorder: primaryShade,
    activeButtonBorder: primaryTint,
  };
};

export interface Styles {
  // Containers
  topContainer: any;
  navContainer: any;
  headerContainer: any;
  footerContainer: any;
  scrollContainer: any;
  textContainer: any;
  // Container Text
  headerText: any;
  h1: any;
  h2: any;
  h3: any;
  body: any;
  small: any;
  detail: any;
  // text
  padding: any;
  textPadding: any;
  w100: any;
  // Alignment
  textLeft: any;
  textCenter: any;
  textRight: any;
  // Button
  enabledButton: any;
  activeButton: any;
  disabledButton: any;
  // Button Text
  enabledButtonText: any;
  activeButtonText: any;
  disabledButtonText: any;
  // Navbar
  enabledNavbarButton: any;
  activeNavbarButton: any;
  disabledNavbarButton: any;
  // Navbar Text
  enabledNavbarButtonText: any;
  activeNavbarButtonText: any;
  disabledNavbarButtonText: any;
}

let styles: Styles;

const setStyles = (): void => {
  styles = {
    ...StyleSheet.create({}),
    topContainer: {
      flex: 1,
    },
    navContainer: {
      flex: 1,
    },
    headerContainer: {
      paddingBottom: 0,
      backgroundColor: colors.background,
    },
    headerText: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'left',
      paddingLeft: 20,
      color: colors.text,
    },
    footerContainer: {
      width: '100%',
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      bottom: 0,
      position: 'absolute',
      backgroundColor: colors.background,
    },
    scrollContainer: {
      backgroundColor: colors.background,
      flexDirection: 'column',
      flex: 1,
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    padding: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    textPadding: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    h1: {
      fontSize: 24,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.text,
    },
    h2: {
      fontSize: 20,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.text,
    },
    h3: {
      fontSize: 18,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.text,
    },
    body: {
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.text,
    },
    small: {
      fontSize: 12,
      fontWeight: '500',
      textAlign: 'center',
      color: colors.text,
    },
    detail: {
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.detail,
    },
    w100: {
      width: '100%',
    },
    textLeft: {
      width: '100%',
      textAlign: 'left',
    },
    textCenter: {
      width: '100%',
      textAlign: 'center',
    },
    textRight: {
      textAlign: 'right',
      width: '100%',
    },
    activeButton: {
      backgroundColor: colors.enabledButtonBackground,
      borderColor: colors.enabledButtonBorder,
      color: colors.primary,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
    },
    disabledButton: {
      backgroundColor: colors.disabledButtonBackground,
      borderColor: colors.disabledButtonBorder,
      color: colors.textTint,
    },
    enabledButton: {
      color: colors.text,
      backgroundColor: colors.enabledButtonBackground,
      borderColor: colors.enabledButtonBorder,
    },
    enabledButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.primary,
    },
    activeButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.primaryShade,
    },
    disabledButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.primaryTint,
    },
    enabledNavbarButton: {
      color: colors.text,
      backgroundColor: colors.background,
      borderColor: colors.backgroundOpposite,
    },
    activeNavbarButton: {
      backgroundColor: colors.background,
      borderColor: colors.backgroundOpposite,
      text: colors.primary,
    },
    disabledNavbarButton: {
      backgroundColor: colors.disabledButtonBackground,
      borderColor: colors.disabledButtonBorder,
      color: colors.textTint,
    },
    enabledNavbarButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.text,
    },
    activeNavbarButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.primary,
    },
    disabledNavbarButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      borderRadius: 10,
      color: colors.textTint,
    },
  };
};

const defineDependentColors = (): void => {
};

/**
 * Function to update all the dependent colors and styles when the primary color is changed
 * @param colorsToSet
 * @returns void
 */
const updateDependents = (colorsToSet = { primary: '#009688' }): void => {
  setColors(colorsToSet);
  defineDependentColors();
  setStyles();
};

/**
 * Toggle the theme of the app
 */
const toggleTheme = (): void => {
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  updateDependents();
};

updateDependents();

export { theme, colors, styles, toggleTheme, updateDependents };
