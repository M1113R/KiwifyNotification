import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import theme from './src/theme';
import { AuthStack } from './src/routes/Auth.routes';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar backgroundColor={theme.COLORS.PRIMARY} barStyle="light-content" />
        <AuthStack/>
      </NavigationContainer>
  );
}
