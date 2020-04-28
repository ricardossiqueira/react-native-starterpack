import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Login from './routes/unauthenticated/login';
import ResetPassword from './routes/unauthenticated/resetPassword';
import SignUp from './routes/unauthenticated/signup';

//Components
import SetTheme from './components/static/setTheme';

//Hooks
import useTheme from './hooks/static/useTheme';

//Create stack types
const Stack = createStackNavigator();

export default function() {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerRight: () => <SetTheme />,
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.font,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerTitle: 'Reset Password',
          headerRight: () => <SetTheme />,
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.font,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitle: 'Sign Up',
          headerRight: () => <SetTheme />,
          headerStyle: {
            backgroundColor: theme.primary,
          },
          headerTintColor: theme.font,
        }}
      />
    </Stack.Navigator>
  );
}
