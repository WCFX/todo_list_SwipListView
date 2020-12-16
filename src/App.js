import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './routes/MainStack';

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);
