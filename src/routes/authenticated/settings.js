import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {OnSignOut} from '../../services/auth';

export default function({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Settings</Text>
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
