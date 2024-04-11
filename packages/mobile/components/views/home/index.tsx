import React from 'react';
import { ScrollView, Text, View } from 'react-native';

/** Redux Store */
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
import {
  detailString,
  headerString,
  smallString,
  textString,
} from '@mahjong/shared/content';
const { selectors } = Store;
/** End of Redux Store */

/**
 * Home view component
 * This component will display the home page
 * @returns {React.JSX.Element} The home view component
 */
function HomeView(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles } = theme;
  return (
    <ScrollView style={[styles.scrollContainer]}>
      <View style={styles.textContainer}>
        <Text style={[styles.h1]}>{headerString}</Text>
        <Text style={[styles.h2, styles.textRight, styles.paddingW]}>
          {headerString}
        </Text>
        <Text style={[styles.h2, styles.textRight, styles.textPadding]}>
          {headerString}
        </Text>
        <Text style={[styles.h3, styles.paddingW, styles.textLeft]}>
          {headerString}
        </Text>
        <Text style={[styles.body, styles.textPadding, styles.textLeft]}>
          {textString}
        </Text>
        <Text style={[styles.small, styles.textPadding, styles.textLeft]}>
          {smallString}
        </Text>
        <Text style={[styles.detail, styles.textPadding, styles.textLeft]}>
          {detailString}
        </Text>
      </View>
    </ScrollView>
  );
}

export default HomeView;
