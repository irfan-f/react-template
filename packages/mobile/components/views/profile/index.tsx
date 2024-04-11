import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
import { ScrollView, Text, View, Image, Button } from 'react-native';
import { logout, login, create } from '@mahjong/shared/store/reducers/user';

import SecurityCard from '../../cards/settings';

function ProfileView(): React.JSX.Element {
  const dispatch = useDispatch();
  const theme = useSelector(selectors.selectTheme);
  const userData = useSelector(selectors.selectUser);
  const { styles, colors } = theme;

  const handleLogout = () => {
    if (!userData.loggedIn) {
      dispatch(login({ email: 'test@gmail.com', password: 'testing' }));
    } else {
      dispatch(logout());
    }
  };
  const handleCreate = () => {
    dispatch(create({ email: 'test@gmail.com', password: 'testing' }));
  };

  return (
    <ScrollView style={[styles.scrollContainer, styles.paddingTop]}>
      <View style={styles.column}>
        {!!userData.image && (
          <Image source={{ uri: userData.image }} style={[styles.largeImage]} />
        )}
        <Text style={[styles.large, styles.paddingTop]}>
          {`${userData.firstName} ${
            userData.lastName ? userData.lastName : ''
          }`}
        </Text>
        <Text style={[styles.h3, { color: 'brown' }]}>{userData.rank}</Text>
      </View>
      <SecurityCard />
      <Button title="Logout" onPress={handleLogout} />
      <Button title="Create test user" onPress={handleCreate} />
    </ScrollView>
  );
}

export default ProfileView;
