import React, { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// always import this package while using react native 
import { enableScreens } from 'react-native-screens';

import MealsNavigator from './navigation/MealsNavigator';

enableScreens();
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const fetchFonts = async () => {
  return await Font.loadAsync({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(error) => console.log(error)}
      />
    )
  }
  return (
    <MealsNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
