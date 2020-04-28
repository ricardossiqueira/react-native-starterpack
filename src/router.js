//lib imports
import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import Loading from './components/animated/loading';
import Authenticated from './authenticated.router';
import Unauthenticated from './unauthenticated.router';

import useTheme from './hooks/static/useTheme';
import {isAuthenticated} from './services/api';

export default function() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const {data} = useSelector(state => {
    return state.auth;
  });

  useEffect(() => {
    isAuthenticated({dispatch: dispatch});
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
