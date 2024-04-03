import React from 'react';
import { ScrollView } from 'react-native';

import { styles } from '../../../styles';

import Header from '../../basic/header';
import HomeView from '../../views/home';

function Home(): React.JSX.Element {
  return (
    <>
      <Header title="Mahjong" />
      <ScrollView style={styles.scrollContainer}>
        <HomeView />
      </ScrollView>
    </>
  );
}

export default Home;
