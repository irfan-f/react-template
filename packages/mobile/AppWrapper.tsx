import React from 'react';
import { Provider } from 'react-redux';
import { Store } from '@mahjong/shared';
const { store } = Store;
import App from './App';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

/**
 * App wrapper component
 * This component will wrap the main app component
 * It will provide the redux store and the safe area context
 * @returns {React.JSX.Element} The app wrapper component
 */
function AppWrapper(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView>
          <App />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
}

export default AppWrapper;
