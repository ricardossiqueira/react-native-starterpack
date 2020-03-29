import React from 'react';

const themes = {
  default: {
    primary: '#80cbc4',
    light: '#b2fef7',
    dark: '#4f9a94',
    font: '#333',
    icon: '#333',
    base: '#f5f5f5',
  },
  dark: {
    primary: '#212121',
    light: '#484848',
    dark: '#000000',
    font: '#fff',
    icon: '#fff',
    base: '#333',
  },
};

export const ThemeContext = React.createContext(themes);
