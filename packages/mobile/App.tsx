import React, { Ref, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '@mahjong/shared';
import { actions as themeActions } from '@mahjong/shared/store/reducers/theme';
import { actions as userActions } from '@mahjong/shared/store/reducers/user';

import {
  Modal,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/pages/home';
import Profile from './components/pages/profile';
import Game from './components/pages/game';
import Footer from './components/basic/footer';
import LoginView from './components/views/login';
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

const { selectors } = Store;

function App(): React.JSX.Element {
  const [showLogin, setShowLogin] = React.useState(false);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const navigationRef: Ref<typeof NavigationContainer | null> =
    React.useRef(null);

  const colorScheme = useColorScheme();
  const settingsSelector = useSelector(selectors.selectSettings);
  const themeSelector = useSelector(selectors.selectTheme);
  const userSelector = useSelector(selectors.selectUser);
  useEffect(() => {
    if (userSelector.loggedIn) {
      setShowLogin(false);
    } else {
      // setShowLogin(true);
    }
  }, [userSelector.loggedIn]);

  const colors = themeSelector.colors;
  const styles = themeSelector.styles;
  // This use effect will trigger when the color scheme changes or the theme is changed through the settings
  // It will dispatch an action if the theme is different from the current theme
  useEffect(() => {
    const currentTheme = themeSelector.theme;
    const futureTheme =
      settingsSelector.appearance.value.value === 'auto'
        ? colorScheme
        : settingsSelector.appearance.value.value;
    if (currentTheme !== futureTheme) {
      dispatch(themeActions.setTheme({ theme: futureTheme }));
    }
  }, [
    settingsSelector.appearance.value,
    colorScheme,
    dispatch,
    themeSelector.theme,
  ]);
  useEffect(() => {
    const currentPrimary = themeSelector.colors.primary;
    const futurePrimary = settingsSelector.theme.value.value;
    if (currentPrimary !== futurePrimary) {
      dispatch(themeActions.setColor({ primary: futurePrimary }));
    }
  }, [
    settingsSelector.theme.value.value,
    dispatch,
    themeSelector.colors.primary,
  ]);

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
              {stacks.map(stack => {
                return (
                  <Stack.Screen
                    key={stack.name}
                    name={stack.name}
                    component={stack.component}
                    options={{ headerShown: false }}
                  />
                );
              })}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        <Footer
          navigationRef={navigationRef}
          stacks={stacks}
          initialStack={initialStack}
        />
      </SafeAreaView>
      <Modal visible={showLogin} presentationStyle="fullScreen">
        <LoginView />
      </Modal>
    </>
  );
}

export default App;
