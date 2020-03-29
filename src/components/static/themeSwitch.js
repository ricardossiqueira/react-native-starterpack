import React from 'react';
import {Switch} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as actionTypes from '../../redux/actions/actions';

export default function({navigation}) {
  const dispatch = useDispatch();

  const {data} = useSelector(state => {
    return state.theme;
  });

  function toggleSwitch() {
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
      <Switch
        onValueChange={() => toggleSwitch()}
        value={data.theme === 'default' ? false : true}
      />
    </>
  );
}
