//lib imports
import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import Loading from './components/animated/loading';
import Authenticated from './authenticated.router';
import Unauthenticated from './unauthenticated.router';

import useTheme from './hooks/static/useTheme';

export default function() {
  const theme = useTheme();

  const {data} = useSelector(state => {
    return state.auth;
  });

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
