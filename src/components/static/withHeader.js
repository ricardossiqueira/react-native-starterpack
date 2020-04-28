import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import useTheme from '../../hooks/static/useTheme';

const Stack = createStackNavigator();

function WithHeader({name, component, headerLeft, headerRight}) {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerLeft: () => headerLeft,
          headerRight: () => headerRight,
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
