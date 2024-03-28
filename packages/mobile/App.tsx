/**
 * Main entry point for the mobile app.
 * This file is the first file that gets executed when the app starts.
 * It is responsible for rendering the main component of the app.
 * The main component is the `Wrapper` component.
 * The `Wrapper` component is responsible for rendering the main navigation component of the app.
 */

import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  useColorScheme,
  StyleSheet,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/pages/Home';
import Profile from './components/pages/Profile';
import Game from './components/pages/Game';
import Scoreboard from './components/pages/Scoreboard';
import Footer from './components/basic/Footer';

import colors from './styles/colors';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const colorScheme = useColorScheme();
  const navigationRef = React.useRef(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          styles.container,
          { backgroundColor: colors.backgroundColors[colorScheme as string] },
        ]}>
        <StatusBar
          barStyle={colors.barStyles[colorScheme as string]}
          backgroundColor={colors.backgroundColors[colorScheme as string]}
        />
        <View style={styles.navContainer}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Game"
                component={Game}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Scoreboard"
                component={Scoreboard}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Footer navigationRef={navigationRef} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
  },
});

export default App;
