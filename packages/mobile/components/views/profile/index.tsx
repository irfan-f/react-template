import React from 'react';
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
import { ScrollView, Text, View, Image } from 'react-native';

const user = {
  firstName: 'John',
  lastName: 'Smith',
};
const rank = 'Rookie';
const rankColor = '#cd7f32';
const img = 'https://avatars.githubusercontent.com/u/1013380?v=4';

import SecurityCard from '../../cards/settings';

function ProfileView(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const { styles, colors } = theme;

  return (
    <ScrollView style={[styles.scrollContainer, styles.paddingTop]}>
      <View style={styles.column}>
        <Image source={{ uri: img }} style={[styles.largeImage]} />
        <Text style={[styles.large, styles.paddingTop]}>
          {`${user.firstName} ${user.lastName ? user.lastName : ''}`}
        </Text>
        <Text style={[styles.h3, { color: rankColor }]}>{rank}</Text>
      </View>
      <SecurityCard />
    </ScrollView>
  );
}

export default ProfileView;
