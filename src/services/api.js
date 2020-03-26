import axios from 'axios';
import {OnSignIn} from './auth';

const baseUri = 'https://appfluxo192.herokuapp.com';

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
