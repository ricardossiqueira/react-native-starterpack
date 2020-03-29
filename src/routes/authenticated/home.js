import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import useTheme from '../../hooks/static/useTheme';

export default function({navigation}) {
  const [value, setValue] = React.useState();
  AsyncStorage.getItem('REFRESH_TOKEN').then(response => {
    setValue(response);
  });

  const theme = useTheme();

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
