import React from 'react';
import { Pressable, Text } from 'react-native';

import { colors, styles } from '../../../styles';

import { ButtonProps } from './types';

function Button({
  title,
  onPress,
  testID,
  style,
  border = 'none',
  state = 'enabled',
}: ButtonProps): React.JSX.Element {
  const [buttonState, setButtonState] = React.useState(
    state === 'enabled'
      ? 'Enabled'
      : state === 'disabled'
      ? 'Disabled'
      : 'Active',
  );

  const borderStyles: Record<string, number | string> = {};

  switch (border) {
    case 'none':
      break;
    case 'full':
      borderStyles.borderWidth = 1;
      borderStyles.borderColor = colors.backgroundOpposite;
      break;
    default:
      border.forEach(borderSide => {
        borderStyles[`border${borderSide}Width`] = 1;
        borderStyles[`border${borderSide}Color`] = colors.backgroundOpposite;
      });
  }

  const onButtonPress =
    buttonState === 'Disabled'
      ? null
      : () => {
          setButtonState('Active');
          onPress();
          setButtonState('Enabled');
        };

  return (
    <Pressable
      style={[styles[`${buttonState}Button${style}`], borderStyles]}
      onPress={() => {
        if (onButtonPress) {
          onButtonPress();
        }
      }}
      testID={testID}>
      <Text style={[styles[`buttonText${buttonState}`]]}>{title}</Text>
    </Pressable>
  );
}

export default Button;
