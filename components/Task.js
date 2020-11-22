import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {vh, vw} from '../mixin';

const Task = ({task, index, doneTask}) => {
  return (
    <View style={taskBlock(index).taskBlock}>
      <View style={styles.textBlock}>
        <Text style={[styles.title, styles.text]}>{task.title}</Text>
        <Text style={[styles.date, styles.text]}>{task.date}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => doneTask(index)}>
        <Text style={[styles.textButton, styles.text]}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const taskBlock = (index) => {
  let style = {
    taskBlock: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: vw(48),
      backgroundColor: '#FFFFFF',
      borderRadius: 9,
      elevation: 8,
      marginBottom: vh(2.8),
      minHeight: 120,
    },
  };

  if (index % 2 !== 0) {
    style.taskBlock.marginLeft = 'auto';
  }

  return StyleSheet.create(style);
};

const styles = StyleSheet.create({
  textBlock: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 16,
  },
  title: {
    fontSize: 21,
    lineHeight: 25,
    color: '#323232',
  },
  date: {
    marginTop: 6,
    fontSize: 10,
    lineHeight: 12,
    color: '#C4C4C4',
  },
  button: {
    display: 'flex',
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    elevation: 8,
  },
  textButton: {
    fontSize: 12,
    lineHeight: 14,
    color: '#C3FEDA',
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default Task;
