import axios from 'axios';
import {OnSignIn} from './auth';

const baseUri = 'https://appfluxo192.herokuapp.com';
const refreshUri = 'https://podio.com/oauth/token?grant_type=refresh_token&';

const app_id = 'appfluxo';
const client_secret =
  'snwczBivL56WeU2tHeA4oSPoxuOo0BL9VnmmWTOuESZ3x1m0VrDbPrj7bfBTzQEL';

export async function handleLogin({email, password}) {
  axios
    .post(`${baseUri}/auth/`, {
      email: email,
      password: password,
    })
    .then(response => {
      OnSignIn({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      });
    })
    .catch(e => console.log(e));
}

export async function keepConnected({refresh_token}) {
  axios
    .post(
      `${refreshUri}client_id=${app_id}&client_secret=${client_secret}&refresh_token=${refresh_token}`,
    )
    .then(response =>
      OnSignIn({
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      }),
    );
}
