import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from '../../../styles';

import Header from '../../basic/header';

function Game(): React.JSX.Element {
  return (
    <>
      <Header title="Games" />
      <ScrollView style={styles.scrollContainer}>
        <></>
      </ScrollView>
    </>
  );
}

export default Game;
