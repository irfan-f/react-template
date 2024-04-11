import React from 'react';
import { useSelector } from 'react-redux';
import { Store, authorization } from '@mahjong/shared';
const { selectors } = Store;
import { Text, SafeAreaView, View, Button } from 'react-native';

function LoginView(): React.JSX.Element {
  const theme = useSelector(selectors.selectTheme);
  const userData = useSelector(selectors.selectUser);
  const { styles, colors } = theme;

  return (
    <SafeAreaView>
      <View>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Welcome to the Mahjong app!</Text>
            <Button
              title="Login"
              onPress={() => {
                authorization.signInAnonymously();
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginView;
