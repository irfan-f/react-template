import { Text, View } from 'react-native';

import type { ReactNode, PropsWithChildren } from 'react';

import React from 'react';
import { styles } from '../../../styles';

export type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps): ReactNode => {
  return (
    <View style={[styles.headerContainer]}>
      <Text style={[styles.headerText]}>{title}</Text>
    </View>
  );
};

export default Header;
