import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useTheme from '../../hooks/static/useTheme';

function ToggleDrawer({navigation}) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={styles.center}
      onPress={() => navigation.toggleDrawer()}>
      <Icon name="menu" size={30} color={theme.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginHorizontal: 15,
  },
});

export default ToggleDrawer;
