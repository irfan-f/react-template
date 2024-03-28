/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import { Appearance, Text, StyleSheet } from 'react-native';

import type { ReactNode } from 'react';

import React from 'react';

import { strings } from '@mahjong/shared';
const { title, description } = strings;

const Colors = {
  white: '#ffffff',
  black: '#000000',
  darker: '#222222',
  lighter: '#f0f0f0',
};

const Header = (): ReactNode => {
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.text,
        {
          color: isDarkMode ? Colors.white : Colors.black,
        },
      ]}>
      {title}
      {'\n'}
      {'\n'}
      {description}
    </Text>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Header;
