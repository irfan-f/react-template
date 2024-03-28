import React from 'react';

import { View, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainerRef } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NavigationButton from './NavigationButton';

import colors from '../../styles/colors';

export type FooterProps = {
  /**
   * The reference of the navigation container.
   */
  navigationRef?: React.MutableRefObject<any> | null;

  /**
   * The styles as based on scheme.
   */
  schemeStyles: {
    backgroundColor: string;
    barStyle: string;
  };
};

function Footer({
  navigationRef,
  schemeStyles,
}: FooterProps): React.JSX.Element {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.footer,
        {
          backgroundColor: colors.backgroundColors[colorScheme as string],
          paddingBottom: insets.bottom || 10,
          paddingTop: insets.bottom / 2 || 5,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      <NavigationButton
        title="Home"
        destination="Home"
        navigationRef={navigationRef}
      />
      <NavigationButton
        title="Game"
        destination="Game"
        navigationRef={navigationRef}
      />
      <NavigationButton
        title="Profile"
        destination="Profile"
        navigationRef={navigationRef}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  footerText: {
    fontSize: 20,
  },
});

export default Footer;
