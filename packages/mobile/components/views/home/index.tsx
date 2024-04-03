import React, { useEffect } from 'react';

import { styles } from '../../../styles';
import { ScrollView, Text, View } from 'react-native';

function HomeView(): React.JSX.Element {
  // Element should rerender if styles change
  useEffect(() => {
    console.log('HomeView rendered');
  });
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.textContainer}>
        <Text style={[styles.h1, styles.padding]}>Header 1</Text>
        <Text style={[styles.h2, styles.textRight]}>Header 2</Text>
        <Text style={[styles.h3, styles.padding, styles.textLeft]}>
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
