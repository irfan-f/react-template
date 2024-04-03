import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Components
import { View } from 'react-native';
import NavigationButton from '../navigationButton';

// Types
import { FooterProps } from './types';

// Styles
import { colors, styles } from '../../../styles';

// Component
function Footer({
  navigationRef,
  stacks,
  initialStack,
}: FooterProps): React.JSX.Element {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.footerContainer,
        {
          backgroundColor: colors.background,
          paddingBottom: insets.bottom || 10,
          paddingTop: insets.bottom / 2 || 5,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}>
      {/* Loop through the stacks and create a screen for each stack */}
      {stacks.map((stack, index) => (
        <NavigationButton
          key={stack.name}
          title={stack.name}
          destination={stack.name}
          navigationRef={navigationRef}
          totalStacks={stacks.length}
          options={{
            border: index === stacks.length - 1 && false,
            onPress: true,
            testID: stack.name,
            initialState: stack.name === initialStack ? 'active' : 'enabled',
          }}
        />
      ))}
    </View>
  );
}

export default Footer;
