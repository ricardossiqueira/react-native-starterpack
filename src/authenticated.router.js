import React from 'react';
import {Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//Screens
import Home from './routes/authenticated/home';
import Settings from './routes/authenticated/settings';

//Components
import CustomDrawer from './components/static/customDrawer';
import FeatherIcon from 'react-native-vector-icons/Feather';
import WithHeader from './components/static/withHeader';
import HeaderButton from './components/static/header.button';

//Hooks
import useTheme from './hooks/static/useTheme';

//Create stack types
const Drawer = createDrawerNavigator();

//Add header to a drawer screen
function HomeWithHeader({navigation}) {
  return (
    <WithHeader
      name="Home"
      component={Home}
      navigation={navigation}
      headerLeft={
        <HeaderButton
          navigation={navigation}
          iconName="menu"
          onPress={() => navigation.toggleDrawer()}
        />
      }
    />
  );
}
function SettingsWithHeader({navigation}) {
  return (
    <WithHeader
      name="Settings"
      component={Settings}
      navigation={navigation}
      headerLeft={
        <HeaderButton
          navigation={navigation}
          iconName="menu"
          onPress={() => navigation.toggleDrawer()}
        />
      }
    />
  );
}

export default function({navigation}) {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawer props={props} navigation={navigation} />
      )}
      drawerContentOptions={{
        activeTintColor: theme.font,
        activeBackgroundColor: theme.primary,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeWithHeader}
        options={{
          drawerIcon: () => (
            <FeatherIcon name="home" size={25} color={theme.font} />
          ),
          drawerLabel: () => <Text style={{color: theme.font}}>Home</Text>,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsWithHeader}
        options={{
          drawerIcon: () => (
            <FeatherIcon name="settings" size={25} color={theme.font} />
          ),
          drawerLabel: () => <Text style={{color: theme.font}}>Settings</Text>,
        }}
      />
    </Drawer.Navigator>
  );
}
