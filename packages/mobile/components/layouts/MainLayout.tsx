/**
 * @fileoverview Wrapper component for the app.
 * This component is responsible for rendering the main navigation component of the app.
 * The main navigation component is the `Wrapper` component.
 * The `Wrapper` component is responsible for rendering the main content of the app.
 */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import colors from '../../styles/colors';
import Footer from '../basic/Footer';

export type HomeProps = {
  children: React.ReactNode;
};

function MainLayout({ children }: HomeProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };

  return { children };
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.boardColors.darkGreen,
  },
});

export default MainLayout;
