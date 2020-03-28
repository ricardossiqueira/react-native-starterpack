import * as keys from '../constants/asyncstorageKeys';
import AsyncStorage from '@react-native-community/async-storage';

export function setThemeDark() {
  AsyncStorage.setItem(keys.THEME, 'dark');
}

export function setThemeDefault() {
  AsyncStorage.setItem(keys.THEME, 'default');
}

export function wichTheme() {
  AsyncStorage.getItem(keys.THEME).then(response => {
    return response;
  });
}
