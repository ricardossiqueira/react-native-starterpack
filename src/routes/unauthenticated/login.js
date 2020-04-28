import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Animated, Keyboard} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import useTheme from '../../hooks/static/useTheme';
import {screenWidth} from '../../constants/dimensions';
import {useSize} from '../../hooks/animated/useSize';
import {handleLogin} from '../../services/api';
import {useDispatch} from 'react-redux';

export default function({navigation}) {
  const [email, setEmail] = useState('ricardosantossiqueira@poli.ufrj.br');
  const [password, setPassword] = useState('ricardossiqueiraC7708ec7708e#');
  const [animationDirection, setAnimationDirection] = useState(true);

  const dispatch = useDispatch();
  const theme = useTheme();
  const size = useSize({
    initialValue: screenWidth * 0.5,
    finalValue: screenWidth * 0.8,
    duration: 200,
    grow: animationDirection,
    trigger: animationDirection,
  });

  useEffect(() => {
    function triggerAnimation() {
      setAnimationDirection(!animationDirection);
    }
    Keyboard.addListener('keyboardDidShow', triggerAnimation);
    Keyboard.addListener('keyboardDidHide', triggerAnimation);
  });

  return (
    <>
      <View style={[styles.animatedWrapper, {backgroundColor: theme.base}]}>
        <Animated.View
          style={[
            styles.animatedContainer,
            {width: size, height: size, backgroundColor: theme.base},
          ]}>
          <LottieView
            source={require('../../assets/lottie/developer.json')}
            autoPlay
            loop
            style={{backgroundColor: theme.base}}
          />
        </Animated.View>
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
        <Button
          title="Login"
          onPress={() => {
            handleLogin({
              email: email,
              password: password,
              dispatch: dispatch,
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
  },
  animatedWrapper: {
    flex: 0,
  },
});
