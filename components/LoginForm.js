import React, {useContext, useEffect, useRef} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {vh, vw} from '../mixin';
import {ApiContext} from '../context/ApiContext';

const LoginForm = ({navigation}) => {
  const {getTasks} = useContext(ApiContext);
  const inputElementRef = useRef(null);

  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: [styles.text, styles.input],
    });
  });

  const goToTasks = () => {
    getTasks();
    navigation.navigate('Tasks');
  };

  return (
    <View style={styles.block}>
      <View>
        <Text style={[styles.label, styles.text]}>Email</Text>
        <TextInput
          placeholder={'Enter email...'}
          style={[styles.input, styles.text]}
        />
        <Text style={[styles.label, styles.text, {marginTop: vh(4.1)}]}>
          Password
        </Text>
        <TextInput
          placeholder={'Enter password...'}
          ref={inputElementRef}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goToTasks()}>
        <Text style={styles.buttonText}>Login</Text>
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
    marginTop: vh(13),
  },
  label: {
    fontSize: 21,
    lineHeight: 25,
  },
  input: {
    height: vh(7.5),
    marginTop: vh(3.6),
    paddingLeft: 15,
    paddingRight: 15,
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
    elevation: 10,
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: vh(4.1),
    marginTop: vh(4.1),
    height: 300,
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

export default LoginForm;
