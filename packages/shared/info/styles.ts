import { Appearance, StatusBarStyle, StyleSheet } from 'react-native';

import tinycolor from 'tinycolor2';

export type Theme = 'light' | 'dark' | 'auto';
let theme: Theme = 'light';

/**
 * Colors object that contains all the colors used in the app
 */
export type Colors = {
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
  backgroundTint: string;
  backgroundShade: string;
  backgroundOpposite: string;
  enabledButtonBackground: string;
  disabledButtonBackground: string;
  activeButtonBorder: string;
  enabledButtonBorder: string;
  disabledButtonBorder: string;
  activeButtonBackground: string;
  barStyle: StatusBarStyle;
}

const white = '#ffffff';
const grey = '#9e9e9e';
const black = '#000000';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const defaultPrimaryColor = tinycolor('#009688');
const defaultScheme = defaultPrimaryColor.splitcomplement();
const defaultSecondaryColor = defaultScheme[1];
const defaultTertiaryColor = defaultScheme[2];
const defaultTextColor = tinycolor(isDarkMode ? white : black);
const defaultGreyColor = tinycolor(grey);

const defaultColors: Colors = {
  // Base colors
  white,
  black,

  // Text Colors
  text: defaultTextColor.toHexString(),
  detail: isDarkMode
  ? defaultGreyColor.darken(10).toHexString()
  : defaultGreyColor.lighten(10).toHexString(),

  // Primary colors
  primary: defaultPrimaryColor.toHexString(),
  primaryShade: defaultPrimaryColor.darken(10).toHexString(),
  primaryTint: defaultPrimaryColor.lighten(10).toHexString(),

  // Secondary colors
  secondary: defaultSecondaryColor.toHexString(),
  secondaryShade: defaultSecondaryColor.darken(10).toHexString(),
  secondaryTint: defaultSecondaryColor.lighten(10).toHexString(),

  // Tertiary colors
  tertiary: defaultTertiaryColor.toHexString(),
  tertiaryShade: defaultTertiaryColor.darken(10).toHexString(),
  tertiaryTint: defaultTertiaryColor.lighten(10).toHexString(),

  // Status colors
  success: '#4caf50',
  warning: '#ffeb3b',
  danger: '#f44336',
  info: '#2196f3',

  // Background colors
  background: isDarkMode ? '#000000' : '#ffffff',
  backgroundTint: isDarkMode ? defaultGreyColor.darken(20).toHexString() : defaultGreyColor.lighten(20).toHexString(),
  backgroundShade: isDarkMode ? defaultGreyColor.lighten(20).toHexString() : defaultGreyColor.darken(20).toHexString(),
  backgroundOpposite: isDarkMode ? '#ffffff' : '#000000',

  // Bar Style
  barStyle: isDarkMode ? 'light-content' : 'dark-content',

  // Button colors
  enabledButtonBackground: defaultPrimaryColor.toHexString(),
  activeButtonBackground: defaultPrimaryColor.lighten(10).toHexString(),
  disabledButtonBackground: defaultPrimaryColor.darken(10).toHexString(),
  enabledButtonBorder: defaultPrimaryColor.toHexString(),
  disabledButtonBorder: defaultPrimaryColor.darken(10).toHexString(),
  activeButtonBorder: defaultPrimaryColor.lighten(10).toHexString(),
};

export type Styles = {
  listItem: any;
  list: any;
  card: any;
  primaryColor: any;
  column: any;
  row: any;
  largeImage: any;
  mediumImage: any;
  smallImage: any;
  // Containers
  topContainer: any;
  navContainer: any;
  headerContainer: any;
  footerContainer: any;
  scrollContainer: any;
  textContainer: any;
  // Container Text
  headerText: any;
  large: any;
  h1: any;
  h2: any;
  h3: any;
  body: any;
  small: any;
  detail: any;
  // text
  paddingTop: any;
  paddingW: any;
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
  justifyLeft: any;
  justifyRight: any;
};


const defaultStyles: Styles = {
  ...StyleSheet.create({}),
  primaryColor: {
    color: defaultColors.primary,
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    width: '100%',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 55,
    paddingStart: 10,
    paddingEnd: 4,
    paddingTop: 10,
    paddingBottom: 10,
  },
  topContainer: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingBottom: 0,
    backgroundColor: defaultColors.background,
  },
  headerText: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'left',
    paddingLeft: 20,
    color: defaultColors.text,
  },
  footerContainer: {
    width: '100%',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
    backgroundColor: defaultColors.background,
  },
  scrollContainer: {
    backgroundColor: defaultColors.background,
    flexDirection: 'column',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  card: {
    backgroundColor: defaultColors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: defaultColors.backgroundOpposite,
    padding: 10,
    margin: 10,
  },
  paddingW: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  paddingTop: {
    paddingTop: 20,
  },
  textPadding: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  large: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.text,
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.text,
  },
  h2: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.text,
  },
  h3: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.text,
  },
  body: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.text,
  },
  small: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    color: defaultColors.text,
  },
  detail: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'center',
    color: defaultColors.detail,
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
    backgroundColor: defaultColors.enabledButtonBackground,
    borderColor: defaultColors.enabledButtonBorder,
    color: defaultColors.primary,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
  },
  disabledButton: {
    backgroundColor: defaultColors.disabledButtonBackground,
    borderColor: defaultColors.disabledButtonBorder,
    color: defaultColors.detail,
  },
  enabledButton: {
    color: defaultColors.text,
    backgroundColor: defaultColors.enabledButtonBackground,
    borderColor: defaultColors.enabledButtonBorder,
  },
  enabledButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.primary,
  },
  activeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.primaryShade,
  },
  disabledButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.primaryTint,
  },
  enabledNavbarButton: {
    color: defaultColors.text,
    backgroundColor: defaultColors.background,
    borderColor: defaultColors.backgroundOpposite,
  },
  activeNavbarButton: {
    backgroundColor: defaultColors.background,
    borderColor: defaultColors.backgroundOpposite,
    text: defaultColors.primary,
  },
  disabledNavbarButton: {
    backgroundColor: defaultColors.disabledButtonBackground,
    borderColor: defaultColors.disabledButtonBorder,
    color: defaultColors.detail,
  },
  justifyLeft: {
    justifyContent: 'flex-start',
  },
  justifyRight: {
    justifyContent: 'flex-end',
  },
  enabledNavbarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.text,
  },
  activeNavbarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.primary,
  },
  disabledNavbarButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
    color: defaultColors.detail,
  },
  smallImage: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  mediumImage: {
    alignSelf: 'flex-end',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  largeImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
  },
};



/**
 * Function to set the colors of the app
 * @param properties - Object containing the colors to set and the theme to use
 * @param properties.colorsToSet - Object containing the colors to set
 * @param properties.themeToSet - Theme to use
 * @returns void
 */
const setColors = (properties): Colors => {
  let { colorsToSet, themeToSet } = properties;
  if (!colorsToSet) {
    colorsToSet = {
      primary: '#009688',
    };
  }
  const themeToUse = themeToSet || theme;

  const isDarkMode = themeToUse === 'dark';

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

  return {
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
    backgroundTint: isDarkMode ? greyColor.darken(10).toHexString() : greyColor.lighten(10).toHexString(),
    backgroundShade: isDarkMode ? greyColor.lighten(10).toHexString() : greyColor.darken(10).toHexString(),
    backgroundOpposite: isDarkMode ? '#ffffff' : '#000000',

    // Bar Style
    barStyle: isDarkMode ? 'light-content' : 'dark-content',

    // Button colors
    enabledButtonBackground: primary,
    activeButtonBackground: primaryTint,
    disabledButtonBackground: primaryShade,
    enabledButtonBorder: primary,
    disabledButtonBorder: primaryShade,
    activeButtonBorder: primaryTint,
  };
};

/**
 * Function to set the styles of the app
 * @param colors - Colors object
 * @returns void
 */
const setStyles = (colors: Colors): Styles => {
  return {
    ...StyleSheet.create({}),
    primaryColor: {
      color: colors.primary,
    },
    list: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0,
      width: '100%',
    },
    listItem: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 55,
      paddingStart: 10,
      paddingEnd: 4,
      paddingTop: 10,
      paddingBottom: 10,
    },
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
    row: {
      flex: 1,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
      flexDirection: 'column',
    },
    card: {
      backgroundColor: colors.background,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.backgroundOpposite,
      padding: 10,
      margin: 10,
    },
    paddingW: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    paddingTop: {
      paddingTop: 20,
    },
    textPadding: {
      paddingLeft: 30,
      paddingRight: 30,
    },
    large: {
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center',
      color: colors.text,
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
      padding: 4,
      color: colors.primary,
      elevation: 8,
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
    },
    disabledButton: {
      padding: 4,
      backgroundColor: colors.disabledButtonBackground,
      borderColor: colors.disabledButtonBorder,
      color: colors.detail,
    },
    enabledButton: {
      padding: 4,
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
      color: colors.primary,
    },
    activeButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
      color: colors.primaryShade,
    },
    disabledButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      alignSelf: 'center',
      textTransform: 'uppercase',
      borderWidth: 0,
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
      color: colors.detail,
    },
    justifyLeft: {
      justifyContent: 'flex-start',
    },
    justifyRight: {
      justifyContent: 'flex-end',
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
      color: colors.detail,
    },
    smallImage: {
      alignSelf: 'flex-start',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    mediumImage: {
      alignSelf: 'flex-end',
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    largeImage: {
      alignSelf: 'center',
      width: 150,
      height: 150,
      borderRadius: 75,
    },
  };
};

export {
  theme,
  defaultColors,
  defaultStyles,
  setColors,
  setStyles,
};
