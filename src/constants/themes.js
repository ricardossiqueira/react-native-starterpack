import React from 'react';

const themes = {
  default: {
    primary: '#bdbdbd',
    light: '#efefef',
    dark: '#8d8d8d',
    font: '#333',
  },
  dark: {
    primary: '#212121',
    light: '#484848',
    dark: '#000000',
    font: '#fff',
  },
};

export const ThemeContext = React.createContext(themes);
