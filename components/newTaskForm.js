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
    width: vw(307),
    marginTop: vh(150),
  },
  label: {
    fontSize: vw(21),
    lineHeight: vw(25),
  },
  input: {
    marginTop: vh(29),
    paddingLeft: vw(19),
    paddingRight: vw(19),
    paddingTop: vh(21),
    fontSize: vw(12.5379),
    lineHeight: vw(15),
    color: '#999999',
    backgroundColor: '#FFFFFF',
    borderRadius: vw(10),

    textAlignVertical: 'top',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(34),
    marginTop: vh(34),
    height: vh(54),
    backgroundColor: '#FFE3D3',
    borderRadius: vw(10),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  buttonText: {
    fontFamily: 'RobotoBlack',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: vw(18),
    lineHeight: vw(21),
  },
  text: {
    fontFamily: 'RobotoBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
});

export default NewTaskForm;
