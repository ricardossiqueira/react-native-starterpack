import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import * as keys from '../constants/asyncstorageKeys';
import * as actionTypes from '../redux/actions/actions';

const baseUri = 'https://appfluxo192.herokuapp.com';
const refreshUri = 'https://podio.com/oauth/token?grant_type=refresh_token&';

const app_id = 'appfluxo';
const client_secret =
  'snwczBivL56WeU2tHeA4oSPoxuOo0BL9VnmmWTOuESZ3x1m0VrDbPrj7bfBTzQEL';

export function handleLogin({email, password, dispatch}) {
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
          refresh_token: response.data.refresh_token,
          loading: false,
        },
      });
    })
    .catch(e => {
      console.log(e);
    });
}

export async function isLoggedIn({refresh_token}) {
  axios
    .post(
      `${refreshUri}client_id=${app_id}&client_secret=${client_secret}&refresh_token=${refresh_token}`,
    )
    .then(response => {
      AsyncStorage.setItem(keys.ACCESS_TOKEN, response.data.access_token);
      AsyncStorage.setItem(keys.REFRESH_TOKEN, response.data.refresh_token);
    });
}
