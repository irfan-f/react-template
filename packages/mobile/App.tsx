import React, { Ref } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

/** Redux Store */
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';

const { selectors } = Store;
import { useThemeEffect } from '@mahjong/shared/store/categories/theme/helpers';
/** End of Redux Store */

/** Navigation */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { mainStacksToShow, initialStack } from '@mahjong/shared/navigation';

const Stack = createNativeStackNavigator();

// Import the footer component
import Footer from './components/basic/footer';

// Import the main screens
import Home from './components/pages/home';
import Profile from './components/pages/profile';

const components = {
  home: Home,
  profile: Profile,
};
/** End of Navigation */

/**
 * Main app component
 * This component will be the main entry point for the app
 * It will handle the navigation and the theme
 * It will also handle the safe area insets
 * @returns {React.JSX.Element} The main app component
 */
function App(): React.JSX.Element {
  // Redux Hooks
  const themeSelector = useSelector(selectors.selectTheme);

  // Establish the safe area insets hook
  const insets = useSafeAreaInsets();

  // Establish the navigation reference to be used in the footer
  const navigationRef: Ref<typeof NavigationContainer | null> =
    React.useRef(null);

  // Establish the color scheme hook
  const colorScheme = useColorScheme();
  useThemeEffect(colorScheme);

  // Get the colors and styles from the theme selector
  const { colors, styles } = themeSelector;

  return (
    <>
      <View style={{ backgroundColor: colors.background, height: insets.top }}>
        <StatusBar
          barStyle={colors.barStyle}
          backgroundColor={colors.background}
        />
      </View>
      <SafeAreaView style={styles.topContainer}>
        <View style={styles.navContainer}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName={initialStack}>
              {/* Loop through the stacks and create a screen for each stack */}
              {mainStacksToShow.map(stack => {
                return (
                  <Stack.Screen
                    key={stack.id}
                    name={stack.name}
                    component={components[stack.id]}
                    options={{ headerShown: false }}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Footer
          navigationRef={navigationRef}
          stacks={mainStacksToShow}
          initialStack={initialStack}
        />
      </SafeAreaView>
    </>
  );
}

export default App;
