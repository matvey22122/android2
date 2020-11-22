import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const AddTaskButton = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('NewTask')}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 34,
    width: 51,
    height: 51,
    backgroundColor: '#FFE3D3',
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 34.2,
    lineHeight: 40,
  },
});

export default AddTaskButton;
