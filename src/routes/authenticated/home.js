import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function() {
  const [value, setValue] = React.useState();
  AsyncStorage.getItem('REFRESH_TOKEN').then(response => {
    setValue(response);
  });
  return (
    <View style={styles.center}>
      <Text>access token: {value}</Text>
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
