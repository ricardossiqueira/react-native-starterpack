import {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import * as keys from '../constants/asyncstorageKeys';
import {keepConnected} from './api';
import {useDispatch} from 'react-redux';
import * as actionTypes from '../redux/actions/actions';

export function IsSignedIn() {
  const [refresh_token, setRefreshToken] = useState();
  const [access_token, setAccessToken] = useState();

  AsyncStorage.getItem(keys.REFRESH_TOKEN).then(response =>
    setRefreshToken(response),
  );
  AsyncStorage.getItem(keys.ACCESS_TOKEN).then(response =>
    setAccessToken(response),
  );

  const dispatch = useDispatch();

  if (refresh_token) {
    keepConnected({refresh_token: refresh_token});
    dispatch({
      type: actionTypes.IS_LOADING,
      payload: {
        loading: false,
        access_token: access_token,
        refresh_token: refresh_token,
      },
    });
  } else {
    dispatch({
      type: actionTypes.IS_LOADING,
      payload: {loading: false, access_token: null, refresh_token: null},
    });
  }
}

export async function OnSignOut() {
  try {
    AsyncStorage.removeItem(keys.ACCESS_TOKEN);
    AsyncStorage.removeItem(keys.REFRESH_TOKEN);
  } catch {
    e => null;
  }
}
