import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export type ButtonProps = {
  /**
   * The title of the button.
   */
  title: string;
  /**
   * The onPress function of the button.
   */
  onPress: () => void;
  /**
   * The testID of the button.
   */
  testID?: string;
};

function Button({ title, onPress, testID }: ButtonProps): React.JSX.Element {
  return (
    <Pressable style={styles.ButtonContainer} onPress={onPress} testID={testID}>
      <Text style={styles.ButtonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderColor: '#fff',
    borderWidth: 1,
  },
  ButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    borderWidth: 0,
    borderRadius: 10,
  },
});

export default Button;
