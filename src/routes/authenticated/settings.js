import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import useTheme from '../../hooks/static/useTheme';
import ThemeButton from '../../components/static/setTheme';
import {handleLogout} from '../../services/auth';

export default function({navigation}) {
  const dispatch = useDispatch();

  const theme = useTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.base}]}>
      <ThemeButton />
      <Button title="Exit" onPress={() => handleLogout({dispatch: dispatch})} />
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
