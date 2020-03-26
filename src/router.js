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
import Loading from './components/animated/loading';
import MenuButton from './components/static/menuButton';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Auth
import {IsSignedIn} from './services/auth';
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Create stack types
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Add header to a drawer screen
function HomeWithHeader({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
    </Stack.Navigator>
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
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={IsSignedIn() ? 'Authenticated' : 'Unauthenticated'}
        headerMode="none">
        <Stack.Screen name="Unauthenticated" component={Unauthenticated} />
        <Stack.Screen name="Authenticated" component={Authenticated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//Auth logic
export default function() {
  const loading = false;

  return loading ? <Loading /> : <Container />;
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
