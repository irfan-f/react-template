import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

import Header from '../../basic/header';

function Game(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;

  return (
    <>
      <Header title="Games" />
      <ScrollView style={styles.scrollContainer}>
        <Text>Game</Text>
      </ScrollView>
    </>
  );
}

export default Game;
