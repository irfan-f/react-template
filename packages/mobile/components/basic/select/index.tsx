import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

function Select({ options, onSelect, selectedValue, onCancel }) {
  const theme = useSelector(selectors.selectTheme);
  const { styles, colors } = theme;
  const handlePress = () => {
    if (Platform.OS === 'ios') {
      const sheetOptions = options.map(option => option.label);
      sheetOptions.push('Cancel');
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: 'Color theme',
          message: 'Select a color theme',
          options: sheetOptions,
          cancelButtonIndex: options.length,
          cancelButtonTintColor: colors.danger,
        },
        buttonIndex => {
          if (buttonIndex === options.length) {
            onCancel();
          } else {
            onSelect(options[buttonIndex]);
          }
        },
      );
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
        <Text style={[styles.body]}>{selectedValue.label}</Text>
        <Icon
          name="arrow-drop-down"
          size={24}
          color={colors.backgroundOpposite}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Select;
