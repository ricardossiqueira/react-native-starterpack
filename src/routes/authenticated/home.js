import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import wichTheme from '../../hooks/static/wichTheme';

export default function({navigation}) {
  const [value, setValue] = React.useState();
  AsyncStorage.getItem('REFRESH_TOKEN').then(response => {
    setValue(response);
  });

  const theme = wichTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.base}]}>
      <Text style={{color: theme.font}}>access token: {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
