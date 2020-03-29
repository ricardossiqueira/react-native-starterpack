import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuButton from './menuButton';
import wichTheme from '../../hooks/static/wichTheme';

const Stack = createStackNavigator();

function WithHeader({navigation, name, component}) {
  const theme = wichTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.font,
        }}
      />
    </Stack.Navigator>
  );
}

export default WithHeader;
