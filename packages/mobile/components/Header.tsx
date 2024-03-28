/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import { useColorScheme, Text, StyleSheet, View } from 'react-native';

import type { ReactNode, PropsWithChildren } from 'react';

import React from 'react';

import colors from '../styles/colors';

export type HeaderProps = PropsWithChildren<{
  title: string;
}>;

const Header = ({ title }: HeaderProps): ReactNode => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: colors.backgroundColors[colorScheme as string] },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: colors.textColors[colorScheme as string],
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingBottom: 0,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
