import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {IsSignedIn} from '../../services/auth';

export default function() {
  IsSignedIn();
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" />
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
