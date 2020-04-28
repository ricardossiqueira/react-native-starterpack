//lib imports
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import * as keys from './constants/asyncstorageKeys';
import * as actionTypes from './redux/actions/actions';

import Loading from './components/animated/loading';
import Authenticated from './authenticated.router';
import Unauthenticated from './unauthenticated.router';

import useTheme from './hooks/static/useTheme';
import {isAuthenticated} from './services/auth';

export default function() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const {data} = useSelector(state => {
    return state.auth;
  });

  useEffect(() => {
    isAuthenticated({dispatch: dispatch});
  }, [dispatch]);

  useEffect(() => {
    AsyncStorage.getItem(keys.THEME).then(response => {
      dispatch({type: actionTypes.SWITCH_THEME, payload: {theme: response}});
    });
  }, [dispatch]);

  return (
    <>
      <StatusBar backgroundColor={theme.dark} barStyle={theme.statusBar} />
      <NavigationContainer>
        {data.loading ? (
          <Loading />
        ) : data.access_token ? (
          <Authenticated />
        ) : (
          <Unauthenticated />
        )}
      </NavigationContainer>
    </>
  );
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
