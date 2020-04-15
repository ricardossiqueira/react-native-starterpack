import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {handleLogin} from '../../services/api';
import {TextInput} from 'react-native-gesture-handler';

export default function({navigation}) {
  const [email, setEmail] = useState('ricardosantossiqueira@poli.ufrj.br');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.center}>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={value => setEmail(value)} />
      <TextInput
        placeholder="Password"
        onChangeText={value => setPassword(value)}
      />
      <Button
        title="Login"
        onPress={async () =>
          handleLogin({
            email: email,
            password: password,
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
