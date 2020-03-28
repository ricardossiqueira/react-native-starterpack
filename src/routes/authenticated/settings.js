import React from 'react';
import {Button, View, Text, StyleSheet, Switch} from 'react-native';
import {OnSignOut} from '../../services/auth';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../../redux/actions/actions';
import wichTheme from '../../hooks/static/wichTheme';

export default function({navigation}) {
  const dispatch = useDispatch();

  const {data} = useSelector(state => {
    return state.theme;
  });

  function toggleSwitch() {
    switch (data.theme) {
      case 'default':
        dispatch({type: actionTypes.SWITCH_THEME, payload: {theme: 'dark'}});
        break;
      case 'dark':
        dispatch({type: actionTypes.SWITCH_THEME, payload: {theme: 'default'}});
        break;
    }
  }

  const theme = wichTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.primary}]}>
      <Text style={[{color: theme.font}]}>Settings</Text>
      <Text style={[{color: theme.font}]}>{data.theme}</Text>
      <Switch
        onValueChange={() => toggleSwitch()}
        value={data.theme === 'default' ? false : true}
      />
      <Button
        title="Exit"
        onPress={async () =>
          OnSignOut().then(() =>
            navigation.navigate('Unauthenticated', {screen: 'Login'}),
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
