import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

import { Text, View } from 'react-native';

import type { ReactNode, PropsWithChildren } from 'react';

export type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps): ReactNode => {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;

  return (
    <View style={[styles.headerContainer]}>
      <Text style={[styles.headerText]}>{title}</Text>
    </View>
  );
};

export default Header;
