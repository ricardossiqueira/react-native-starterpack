import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Keyboard, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';
import CheckBox from '@react-native-community/checkbox';

import useTheme from '../../hooks/static/useTheme';
import {handleLogin} from '../../services/auth';
import {useDispatch} from 'react-redux';

export default function({navigation}) {
<<<<<<< HEAD
  const [email, setEmail] = useState('ricardosantossiqueira@poli.ufrj.br');
  const [password, setPassword] = useState('');
=======
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [animationDirection, setAnimationDirection] = useState(true);
  const [keepConnected, setKeepConnected] = useState(false);

  const dispatch = useDispatch();
  const theme = useTheme();

  useEffect(() => {
    function triggerAnimation() {
      setAnimationDirection(!animationDirection);
    }

    Keyboard.addListener('keyboardDidShow', triggerAnimation);
    Keyboard.addListener('keyboardDidHide', triggerAnimation);
  });
>>>>>>> dev

  return (
    <>
      <View style={[styles.animatedWrapper, {backgroundColor: theme.base}]}>
        {animationDirection && (
          <View
            style={[styles.animatedContainer, {backgroundColor: theme.base}]}>
            <LottieView
              source={require('../../assets/lottie/developer.json')}
              autoPlay
              loop
              style={{backgroundColor: theme.base}}
            />
          </View>
        )}
      </View>

      <View style={[styles.center, {backgroundColor: theme.base}]}>
        <TextInput
          placeholder="Email"
          onChangeText={value => setEmail(value)}
        />
        <TextInput
          placeholder="Password"
          onChangeText={value => setPassword(value)}
        />

        <TouchableOpacity onPress={() => setKeepConnected(!keepConnected)}>
          <View style={styles.checkbox}>
            <CheckBox value={keepConnected} />
            <Text>Mantenha- me conectado</Text>
          </View>
        </TouchableOpacity>

        <Button
          title="Login"
          onPress={() => {
            handleLogin({
              email: email,
              password: password,
              dispatch: dispatch,
              keepConnected: keepConnected,
            });
          }}
        />
        <Button
          title="reset password"
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <Button
          title="create account"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  animatedContainer: {
    flex: 0,
    alignSelf: 'center',
    width: 300,
    height: 300,
  },
  animatedWrapper: {
    flex: 0,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
