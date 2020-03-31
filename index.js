/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import Router from './src/router';
import {name as appName} from './app.json';
import {store} from './src/redux/store/store';

if (__DEV__) {
  require('react-devtools');
}

AppRegistry.registerComponent(appName, () => () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
});
