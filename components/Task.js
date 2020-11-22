import React, {useRef} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import {vh, vw} from '../mixin';

const Task = ({task, index, drag, isActive, deleteTask, pastIndex}) => {
  const animatedValue = new Animated.Value(0);

  const side = useRef('left');

  if (!isActive) {
    let _move = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    };
    if (pastIndex === -1) {
      side.current = index % 2 === 0 ? 'left' : 'right';
      _move();
    } else if (pastIndex % 2 === index % 2) {
      _move = () => {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1,
          useNativeDriver: true,
        }).start();
      };
      side.current = index % 2 === 0 ? 'left' : 'right';
      _move();
    } else {
      if (pastIndex % 2 === 0) {
        side.current = 'right';
        _move();
      } else {
        side.current = 'left';
        _move = () => {
          Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        };
        _move();
      }
    }
  }

  let xValRight = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, vw(125)],
  });

  let xValLeft = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [vw(125), 0],
  });

  let animStyle = {};

  if (isActive && index % 2 === 0) {
    animStyle = {};
  } else {
    if (side.current === 'right') {
      animStyle = {
        transform: [{translateX: xValRight}],
      };
    } else {
      animStyle = {
        transform: [{translateX: xValLeft}],
      };
    }
  }

  return (
    <Animated.View style={animStyle}>
      <TouchableWithoutFeedback onLongPress={drag}>
        <View
          style={[
            styles.taskBlock,
            {backgroundColor: isActive ? '#f6f6f6' : '#FFFFFF'},
          ]}>
          <View style={styles.textBlock}>
            <Text style={[styles.title, styles.text]}>{task.title}</Text>
            <Text style={[styles.date, styles.text]}>{task.date}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteTask(index)}>
            <Text style={[styles.textButton, styles.text]}>Done</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
//TODO: загрузку

const styles = StyleSheet.create({
  taskBlock: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: vw(180),
    backgroundColor: '#FFFFFF',
    borderRadius: 9,
    elevation: 8,
    marginBottom: vh(23),
    marginLeft: 10,
    marginRight: 10,
    minHeight: 120,
  },
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
    elevation: 5,
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
