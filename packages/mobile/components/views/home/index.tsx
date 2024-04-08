import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;

import { ScrollView, Text, View } from 'react-native';

function HomeView(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;
  return (
    <ScrollView style={[styles.scrollContainer]}>
      <View style={styles.textContainer}>
        <Text style={[styles.h1]}>Header 1</Text>
        <Text style={[styles.h2, styles.textRight]}>Header 2</Text>
        <Text style={[styles.h3, styles.paddingW, styles.textLeft]}>
          Header 3
        </Text>
        <Text style={[styles.body, styles.textPadding, styles.textLeft]}>
          body
        </Text>
        <Text style={[styles.small, styles.textPadding, styles.textLeft]}>
          small
        </Text>
        <Text style={[styles.detail, styles.textPadding, styles.textLeft]}>
          detail
        </Text>
      </View>
    </ScrollView>
  );
}

export default HomeView;
