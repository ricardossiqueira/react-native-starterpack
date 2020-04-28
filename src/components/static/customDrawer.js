import React from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import useTheme from '../../hooks/static/useTheme';
import {handleLogout} from '../../services/auth';

function CustomDrawer({navigation, props}) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const windowDimensions = useWindowDimensions();

  return (
    <>
      <DrawerContentScrollView {...props} style={{backgroundColor: theme.base}}>
        <View
          style={[
            styles.topContainer,
            {
              width: windowDimensions.width * 0.725,
              height: windowDimensions.width * 0.725,
              backgroundColor: theme.primary,
              borderRadius: windowDimensions.width * 0.01,
            },
          ]}>
          <View
            style={[
              styles.userImage,
              {
                width: windowDimensions.width * 0.5,
                height: windowDimensions.width * 0.5,
                borderRadius: windowDimensions.width * 0.25,
                backgroundColor: theme.base,
              },
            ]}
          />
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          icon={() => <Icon name="log-out" size={25} color={theme.font} />}
          label={() => <Text style={{color: theme.font}}>Logout</Text>}
          activateTintColor={theme.primary}
          onPress={() => {
            handleLogout({dispatch: dispatch});
          }}
        />
      </DrawerContentScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    alignSelf: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {},
});

export default CustomDrawer;
