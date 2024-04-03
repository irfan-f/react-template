import React, { Ref } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/pages/home';
import Profile from './components/pages/profile';
import Game from './components/pages/game';
import Footer from './components/basic/footer';

import { styles, colors, theme, toggleTheme } from './styles';

const Stack = createNativeStackNavigator();

const initialStack = 'Home';

const stacks = [
  {
    name: 'Game',
    component: Game,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];

function App(): React.JSX.Element {
  const navigationRef: Ref<typeof NavigationContainer | null> =
    React.useRef(null);
  const colorScheme = useColorScheme() || 'light';
  if (colorScheme !== theme) {
    toggleTheme();
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          barStyle={colors.barStyle}
          backgroundColor={colors.background}
        />
        <View style={styles.navContainer}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={initialStack}>
              {/* Loop through the stacks and create a screen for each stack */}
              {stacks.map(stack => (
                <Stack.Screen
                  key={stack.name}
                  name={stack.name}
                  component={stack.component}
                  options={{ headerShown: false }}
                />
              ))}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Footer
          navigationRef={navigationRef}
          stacks={stacks}
          initialStack={initialStack}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
