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
import { strings } from '@mahjong/shared';
import Footer from '../basic/Footer';
import MainLayout from '../layouts/MainLayout';
const { title, description } = strings;

function Home(): React.JSX.Element {
  const colorScheme = useColorScheme();

  return (
    <>
      <Header title="Mahjong" />
      <ScrollView style={{ backgroundColor: colors.backgroundColors[colorScheme as string] }}>
        <View
          accessibilityLabel="Main content"
          style={{ flex: 0.6, ...styles.sectionContainer }}>
          <View>
            <Text style={styles.sectionTitle}>Home</Text>
            <Text style={styles.sectionDescription}>
              Welcome to the Mahjong app!
            </Text>
          </View>
          <View>
            <Text style={styles.sectionTitle}>Home</Text>
            <Text style={styles.sectionDescription}>
              Welcome to the Mahjong app!
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
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

export default Home;
