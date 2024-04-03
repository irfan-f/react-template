import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../../basic/header';

import { styles } from '../../../styles';

function Profile(): React.JSX.Element {
  return (
    <>
      <Header title="Profile" />
      <ScrollView style={styles.scrollContainer}>
        <></>
      </ScrollView>
    </>
  );
}

export default Profile;
