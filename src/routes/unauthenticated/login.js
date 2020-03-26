import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {OnSignIn} from '../../services/auth';

export default function({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Login</Text>
      <Button
        title="Login"
        onPress={async () =>
          OnSignIn({
            access_token: 'dummy_access_token',
            refresh_token: 'dummy_refresh_token',
          }).then(() => navigation.navigate('Authenticated', {screen: 'Home'}))
        }
      />
      <Button
        title="reset password"
        onPress={() => navigation.navigate('ResetPassword')}
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
