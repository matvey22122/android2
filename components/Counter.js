import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ApiContext} from '../context/ApiContext';
import {vh, vw} from '../mixin';

const Counter = () => {
  const {tasks} = useContext(ApiContext);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>{tasks.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
    height: vh(48),
    right: 0,
    top: vh(107),
    paddingLeft: 25,
    paddingRight: 25,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#FFE3D3',
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: vw(18),
    lineHeight: vw(21),
  },
});

export default Counter;
