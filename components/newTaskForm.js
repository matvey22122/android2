import React, {useContext, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {vh, vw} from '../mixin';
import {ApiContext} from '../context/ApiContext';

const NewTaskForm = ({navigation}) => {
  const {addTask} = useContext(ApiContext);

  const [title, setTitle] = useState('');

  const createTask = () => {
    if (title.trim()) {
      if (addTask(title)) {
        navigation.pop();
      }
    }
  };

  return (
    <View style={styles.block}>
      <View>
        <Text style={[styles.label, styles.text]}>Task name</Text>
        <TextInput
          placeholder={'Enter task name...'}
          multiline
          numberOfLines={6}
          style={[styles.input, styles.text]}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => createTask()}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: vw(81.8),
    marginTop: vh(18.5),
  },
  label: {
    fontSize: 21,
    lineHeight: 25,
  },
  input: {
    marginTop: vh(3.6),
    paddingLeft: 19,
    paddingRight: 19,
    paddingTop: 21,
    fontSize: 12.5379,
    lineHeight: 15,
    color: '#999999',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    textAlignVertical: 'top',
    elevation: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(4.1),
    marginTop: vh(4.1),
    height: vh(6.6),
    backgroundColor: '#FFE3D3',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 2,
  },
  buttonText: {
    fontFamily: 'RobotoBlack',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default NewTaskForm;
