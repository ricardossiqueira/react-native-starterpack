import React from 'react';

const themes = {
  default: {
    statusBar: 'dark-content',
    primary: '#01e292',
    light: '#65ffc3',
    dark: '#00af64',
    font: '#333',
    icon: '#333',
    base: '#f5f5f5',
  },
  dark: {
    statusBar: 'light-content',
    primary: '#212121',
    light: '#484848',
    dark: '#000000',
    font: '#fff',
    icon: '#fff',
    base: '#555',
  },
};

export const ThemeContext = React.createContext(themes);
