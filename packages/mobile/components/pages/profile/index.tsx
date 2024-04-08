import React from 'react';

import Header from '../../basic/header';

import ProfileView from '../../views/profile';

function Profile(): React.JSX.Element {
  return (
    <>
      <Header title="Profile" />
      <ProfileView />
    </>
  );
}

export default Profile;
