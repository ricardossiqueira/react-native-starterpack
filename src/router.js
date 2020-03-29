//lib imports
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Unauthenticated screens
import Login from './routes/unauthenticated/login';
import ResetPassword from './routes/unauthenticated/resetPassword';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Authenticated screens
import Home from './routes/authenticated/home';
import Settings from './routes/authenticated/settings';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Components
// import Loading from './components/animated/loading';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Auth
import {IsSignedIn} from './services/auth';
import WithHeader from './components/static/withHeader';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Create stack types
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Add header to a drawer screen
function HomeWithHeader({navigation}) {
  return <WithHeader name="Home" component={Home} navigation={navigation} />;
}
function SettingsWithHeader({navigation}) {
  return (
    <WithHeader name="Settings" component={Settings} navigation={navigation} />
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Nested navigators
function Unauthenticated() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

function Authenticated() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeWithHeader} />
      <Drawer.Screen name="Settings" component={SettingsWithHeader} />
    </Drawer.Navigator>
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Navigation containers
function AuthenticatedContainer() {
  return (
    <Stack.Navigator initialRouteName="Authenticated" headerMode="none">
      <Stack.Screen name="Unauthenticated" component={Unauthenticated} />
      <Stack.Screen name="Authenticated" component={Authenticated} />
    </Stack.Navigator>
  );
}

function UnauthenticatedContainer() {
  return (
    <Stack.Navigator initialRouteName="Unauthenticated" headerMode="none">
      <Stack.Screen name="Unauthenticated" component={Unauthenticated} />
      <Stack.Screen name="Authenticated" component={Authenticated} />
    </Stack.Navigator>
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Auth logic
export default function() {
  return (
    <NavigationContainer>
      {IsSignedIn() ? <AuthenticatedContainer /> : <UnauthenticatedContainer />}
    </NavigationContainer>
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
