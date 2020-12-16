import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitle: 'Crie sua lista',
      headerTintColor: '#897de0',
    }}
  >
    <Screen name="Home" component={Home} />
  </Navigator>
);
