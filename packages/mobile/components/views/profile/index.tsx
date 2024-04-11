import React from 'react';
import { ScrollView, Text, View, Image } from 'react-native';

/** Redux Store */
import { useSelector } from 'react-redux';
import { Store } from '@mahjong/shared';
const { selectors } = Store;
/** End of Redux Store */

// Import components
import SecurityCard from '../../cards/settings';

/**
 * Profile view component
 * This component will display the user's profile
 * It will display the user's name and profile picture
 * @returns {React.JSX.Element} The profile view component
 */
function ProfileView(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const userData = useSelector(selectors.selectUser);
  const { styles, colors } = theme;

  const usersName = userData?.loggedIn
    ? `${userData.firstName} ${userData.lastName ? userData.lastName : ''}`
    : 'Name Placeholder';
  return (
    <ScrollView style={[styles.scrollContainer, styles.paddingTop]}>
      <View style={styles.column}>
        {!!userData.image ? (
          <Image source={{ uri: userData.image }} style={[styles.largeImage]} />
        ) : (
          <View
            style={[
              styles.largeImage,
              { borderWidth: 1, borderColor: colors.backgroundOpposite },
            ]}
          />
        )}
        <Text style={[styles.large, styles.paddingTop]}>{usersName}</Text>
      </View>
      <SecurityCard />
    </ScrollView>
  );
}

export default ProfileView;
