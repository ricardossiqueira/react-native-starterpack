import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function MenuButton({navigation}) {
  return (
    <TouchableOpacity
      style={styles.center}
      onPress={() => navigation.toggleDrawer()}>
      <Text> Menu</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default MenuButton;
