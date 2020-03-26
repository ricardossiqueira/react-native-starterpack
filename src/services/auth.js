import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as keys from '../constants/asyncstorageKeys';

export async function OnSignIn({access_token, refresh_token}) {
  await AsyncStorage.setItem(keys.ACCESS_TOKEN, access_token);
  refresh_token
    ? await AsyncStorage.setItem(keys.REFRESH_TOKEN, refresh_token)
    : null;
}

export function IsSignedIn() {
  const [refresh_token, setRefreshToken] = useState();
  AsyncStorage.getItem(keys.REFRESH_TOKEN).then(response =>
    setRefreshToken(response),
  );
  if (refresh_token) {
    return true;
  } else {
    return false;
  }
}

export async function OnSignOut() {
  try {
    AsyncStorage.removeItem(keys.REFRESH_TOKEN);
  } catch {
    e => null;
  }
}
