import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuButton from './menuButton';

const Stack = createStackNavigator();

function WithHeader({navigation, name, component}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
  );
}

export default WithHeader;
