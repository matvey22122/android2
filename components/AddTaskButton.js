import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {vw} from '../mixin';

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
    width: vw(51),
    height: vw(51),
    backgroundColor: '#FFE3D3',
    borderRadius: vw(25),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: vw(34.2),
    lineHeight: vw(40),
  },
});

export default AddTaskButton;
