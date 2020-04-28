import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import useTheme from '../../hooks/static/useTheme';

export default function() {
  const theme = useTheme();

  return (
    <View style={[styles.center, {backgroundColor: theme.base}]}>
      <ActivityIndicator size="large" color={theme.font} />
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
