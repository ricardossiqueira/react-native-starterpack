import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ToggleDrawer from './toggleDrawer';
import ProfileButton from './profileButton';
import useTheme from '../../hooks/static/useTheme';

const Stack = createStackNavigator();

function WithHeader({navigation, name, component, headerLeft, headerRight}) {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={component}
        options={{
          headerLeft: () => <ToggleDrawer navigation={navigation} />,
          headerRight: () => <ProfileButton navigation={navigation} />,
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
