import React from 'react';
import { Pressable, Text } from 'react-native';

import { Store } from '@mahjong/shared';
const { selectors } = Store;

import { ButtonProps } from './types';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Button({
  title,
  icon,
  onPress,
  testID,
  style = '',
  border = 'none',
  state = 'enabled',
  fill = 'solid',
}: ButtonProps): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { colors, styles } = theme;

  const [buttonState, setButtonState] = React.useState(
    state === 'enabled'
      ? 'enabled'
      : state === 'disabled'
      ? 'disabled'
      : 'active',
  );

  const borderStyles: Record<string, number | string> = {};

  switch (border) {
    case 'none':
      break;
    case 'full':
      borderStyles.borderWidth = 1;
      borderStyles.borderColor = colors.backgroundOpposite;
      borderStyles.borderRadius = 5;
      break;
    default:
      border.forEach(borderSide => {
        borderStyles[`border${borderSide}Width`] = 1;
        borderStyles[`border${borderSide}Color`] = colors.backgroundOpposite;
      });
      borderStyles.borderRadius = 5;
  }
  const widthStyle = {};

  const fillStyles = {};
  switch (fill) {
    case 'solid':
      fillStyles.backgroundColor = colors.primary;
      break;
    case 'outline':
      fillStyles.backgroundColor = 'transparent';
      fillStyles.borderColor = colors.primary;
      fillStyles.borderWidth = 3;
      fillStyles.borderRadius = 10;
      break;
    case 'clear':
      fillStyles.background = 'transparent';
      fillStyles.borderWidth = 0;
      break;
  }

  const onButtonPress =
    buttonState === 'disabled'
      ? null
      : () => {
          setButtonState('active');
          onPress();
          setButtonState('enabled');
        };

  return (
    <Pressable
      style={[
        styles.row,
        { justifyContent: 'center', alignItems: 'center' },
        styles[`${buttonState}Button${style}`],
        borderStyles,
        widthStyle,
        fillStyles,
      ]}
      onPress={() => {
        if (onButtonPress) {
          onButtonPress();
        }
      }}
      testID={testID}>
      {title && (
        <Text style={[styles[`buttonText${buttonState}`]]}>{title}</Text>
      )}
      {icon && <Icon name={icon} size={24} color={colors.backgroundOpposite} />}
    </Pressable>
  );
}

export default Button;
