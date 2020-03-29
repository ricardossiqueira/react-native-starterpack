import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {OnSignOut} from '../../services/auth';
import {useSelector} from 'react-redux';
import wichTheme from '../../hooks/static/wichTheme';
import ThemeSwitch from '../../components/static/themeSwitch';

export default function({navigation}) {
  const {data} = useSelector(state => {
    return state.theme;
  });

  const theme = wichTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.base}]}>
      <Text style={[{color: theme.font}]}>Settings</Text>
      <Text style={[{color: theme.font}]}>{data.theme}</Text>
      <ThemeSwitch />
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
