import React from 'react';
import {View, StyleSheet} from 'react-native';
import useTheme from '../../hooks/static/useTheme';

export default function({navigation}) {
  const theme = useTheme();

  return <View style={[styles.center, {backgroundColor: theme.base}]} />;
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
