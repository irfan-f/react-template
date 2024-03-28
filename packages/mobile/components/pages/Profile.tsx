/**
 * @fileoverview Wrapper component for the app.
 * This component is responsible for rendering the main navigation component of the app.
 * The main navigation component is the `Wrapper` component.
 * The `Wrapper` component is responsible for rendering the main content of the app.
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
  Text,
} from 'react-native';

import colors from '../../styles/colors';

import Header from '../Header';
import MainLayout from '../layouts/MainLayout';

function Profile(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };

  return <Header title="Profile" description="For Profile Things" />;
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.boardColors.darkGreen,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: colors.boardColors.darkGreen,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Profile;
