import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
import { CardProps } from './types';

function Card({ title, children }: CardProps): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;
  return (
    <View style={styles.card}>
      <Text style={[styles.h2, styles.textLeft]}>{title}</Text>
      {children}
    </View>
  );
}

export default Card;
