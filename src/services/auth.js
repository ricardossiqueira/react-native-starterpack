import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import * as keys from '../constants/asyncstorageKeys';
import * as actionTypes from '../redux/actions/actions';

const baseUri = 'https://appfluxo192.herokuapp.com';
const refreshUri = 'https://podio.com/oauth/token?grant_type=refresh_token&';

const app_id = 'appfluxo';
const client_secret =
  'snwczBivL56WeU2tHeA4oSPoxuOo0BL9VnmmWTOuESZ3x1m0VrDbPrj7bfBTzQEL';

export function handleLogin({email, password, keepConnected, dispatch}) {
  dispatch({type: actionTypes.LOGIN_REQUEST, payload: {loading: true}});
  axios
    .post(`${baseUri}/auth/`, {
      email: email,
      password: password,
    })
    .then(response => {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
          access_token: response.data.access_token,
          refresh_token: keepConnected ? response.data.refresh_token : null,
          loading: false,
        },
      });
      keepConnected &&
        AsyncStorage.setItem(keys.REFRESH_TOKEN, response.data.refresh_token);
    })
    .catch(e => {
      console.log(e);
    });
}

export function isAuthenticated({dispatch}) {
  dispatch({type: actionTypes.LOGIN_REQUEST, payload: {loading: true}});
  AsyncStorage.getItem(keys.REFRESH_TOKEN).then(item =>
    item
      ? axios
          .post(
            `${refreshUri}client_id=${app_id}&client_secret=${client_secret}&refresh_token=${item}`,
          )
          .then(response => {
            dispatch({
              type: actionTypes.LOGIN_SUCCESS,
              payload: {
                access_token: response.data.access_token,
                refresh_token: response.data.refresh_token,
                loading: false,
              },
            });
          })
      : dispatch({
          type: actionTypes.LOGIN_FAILURE,
          payload: {
            loading: false,
          },
        }),
  );
}

export function handleLogout({dispatch}) {
  AsyncStorage.removeItem(keys.REFRESH_TOKEN);
  dispatch({type: actionTypes.LOG_OUT});
}
