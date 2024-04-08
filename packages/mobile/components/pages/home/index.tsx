import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';

import Header from '../../basic/header';
import HomeView from '../../views/home';

function Home(): React.JSX.Element {
  const theme = useSelector(Store.selectors.selectTheme);
  const { styles } = theme;
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
