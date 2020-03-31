import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import useTheme from '../../hooks/static/useTheme';
import {useSelector} from 'react-redux';

export default function({navigation}) {
  const [value, setValue] = React.useState();
  AsyncStorage.getItem('REFRESH_TOKEN').then(response => {
    setValue(response);
  });

  const {data} = useSelector(state => {
    return state.auth;
  });

  console.log(data);

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
