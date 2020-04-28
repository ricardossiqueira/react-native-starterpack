import {useContext} from 'react';
import {useSelector} from 'react-redux';
import {ThemeContext} from '../../constants/themes';

export default function() {
  const {data} = useSelector(state => {
    return state.theme;
  });
  const theme = useContext(ThemeContext)[data.theme];
  return theme;
}
