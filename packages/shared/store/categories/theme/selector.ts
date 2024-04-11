import { RootState } from "../../selectors";
import { StatusBarStyle } from "react-native";

export interface ThemeState {
  styles: {
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
  colors: {
    // Base colors
    white: string;
    black: string;

    // Theme colors
    primary: string;
    primaryShade: string;
    primaryTint: string;
    secondary: string;
    secondaryShade: string;
    secondaryTint: string;
    tertiary: string;
    tertiaryShade: string;
    tertiaryTint: string;

    // Text colors
    text: string;
    detail: string;

    // Status colors
    success: string;
    warning: string;
    danger: string;
    info: string;

    // Background colors
    background: string;
    backgroundTint: string;
    backgroundShade: string;
    backgroundOpposite: string;

    // Button colors
    enabledButtonBackground: string;
    disabledButtonBackground: string;
    activeButtonBorder: string;
    enabledButtonBorder: string;
    disabledButtonBorder: string;
    activeButtonBackground: string;

    // Bar style for react native
    barStyle: StatusBarStyle;
  };
}

const selectTheme: (state: RootState) => ThemeState = state => state.theme;

export default selectTheme;
