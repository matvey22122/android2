import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {vh, vw} from '../mixin';

export const Title = ({title}) => <Text style={styles.title}>{title}</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: vw(12.8),
    lineHeight: vh(6.9),
  },
});
