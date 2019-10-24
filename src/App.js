import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './routes/AppNavigator';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <AppNavigator />
  </SafeAreaView>
);

export default App;
