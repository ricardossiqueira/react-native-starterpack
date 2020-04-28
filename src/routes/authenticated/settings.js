import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import useTheme from '../../hooks/static/useTheme';
import ThemeSwitch from '../../components/static/themeSwitch';

export default function({navigation}) {
  const {data} = useSelector(state => {
    return state.theme;
  });

  const theme = useTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.base}]}>
      <Text style={[{color: theme.font}]}>Settings</Text>
      <Text style={[{color: theme.font}]}>{data.theme}</Text>
      <ThemeSwitch />
      <Button
        title="Exit"
        onPress={navigation.navigate('Unauthenticated', {screen: 'Login'})}
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
