import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import useTheme from '../../hooks/static/useTheme';
import {useSelector} from 'react-redux';

export default function({}) {
  const theme = useTheme();

  const {data} = useSelector(state => {
    return state.auth;
  });

  return (
    <>
      <View style={[styles.center, {backgroundColor: theme.base}]}>
        <Text>access_token: {data.access_token}</Text>
        <Text>refresh_token: {data.refresh_token}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
