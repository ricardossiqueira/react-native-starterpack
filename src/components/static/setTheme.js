import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/static/useTheme';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../../redux/actions/actions';

export default function() {
  const theme = useTheme();
  const dispatch = useDispatch();

  const {data} = useSelector(state => {
    return state.theme;
  });

  function toggleTheme() {
    switch (data.theme) {
      case 'default':
        dispatch({type: actionTypes.SWITCH_THEME, payload: {theme: 'dark'}});
        break;
      case 'dark':
        dispatch({type: actionTypes.SWITCH_THEME, payload: {theme: 'default'}});
        break;
    }
  }

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          toggleTheme();
        }}>
        <MaterialIcon
          name="theme-light-dark"
          size={30}
          color={theme.font}
          style={styles.icon}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});
