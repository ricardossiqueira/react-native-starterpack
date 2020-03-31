import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import useTheme from '../../hooks/static/useTheme';
import {screenWidth} from '../../constants/dimensions';

export default function({navigation}) {
  const theme = useTheme();

  return (
    <>
      <View style={[styles.center, {backgroundColor: theme.base}]}>
        <Text>Signup</Text>
      </View>
      <KeyboardAvoidingView style={styles.formContainer}>
        <TextInput
          style={[styles.input, {borderColor: theme.dark}]}
          placeholder="Name"
        />
        <TextInput
          style={[styles.input, {borderColor: theme.dark}]}
          placeholder="Email"
        />
        <TextInput
          style={[styles.input, {borderColor: theme.dark}]}
          placeholder="Password"
        />
        <TextInput
          style={[styles.input, {borderColor: theme.dark}]}
          placeholder="Repeat password"
        />
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  formContainer: {
    flex: 0,
    alignItems: 'center',
    alignSelf: 'center',
  },
  input: {
    flex: 0,
    alignSelf: 'center',
    width: screenWidth * 0.8,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
  },
});
