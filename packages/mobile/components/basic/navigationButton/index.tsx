import { Pressable, Text } from 'react-native';

import React, { useEffect, useState } from 'react';

// Types
import { NavigationButtonProps } from './types';

// Styles
import { colors, styles } from '../../../styles';

// Helpers
function getButtonState(
  destination: string,
  navigationRef: any,
  disabled: boolean,
) {
  if (disabled) {
    return 'disabled';
  }

  return navigationRef?.current?.getCurrentRoute()?.name === destination
    ? 'active'
    : 'enabled';
}

// Component
function NavigationButton({
  title,
  destination,
  navigationRef,
  totalStacks,
  options: {
    border = true,
    onPress = true,
    onPressFunction,
    testID,
    initialState,
  },
}: NavigationButtonProps): React.JSX.Element {
  const [buttonState, setButtonState] = useState(initialState || 'enabled');

  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', () => {
      setButtonState(getButtonState(destination, navigationRef, false));
    });

    getButtonState(destination, navigationRef, false);

    // Clean up the event listener when the component is unmounted
    return unsubscribe;
  }, [destination, navigationRef]);

  const customStyle = {
    borderRightWidth: border ? 1 : 0,
    borderRightColor: colors.backgroundOpposite,
    width: `${100 / totalStacks}%`,
  };

  let onButtonPress =
    onPressFunction ||
    (() => {
      navigationRef.current?.navigate(destination);
    });
  if (onPress === false) {
    onButtonPress = () => {};
  }

  return (
    <Pressable
      style={[customStyle, styles[`${buttonState}NavbarButton`]]}
      onPress={() => {
        onButtonPress();
      }}
      disabled={
        !onPress || buttonState === 'disabled' || buttonState === 'active'
      }
      testID={testID}>
      <Text style={[styles[`${buttonState}NavbarButtonText`]]}>{title}</Text>
    </Pressable>
  );
}

export default NavigationButton;
