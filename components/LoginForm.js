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
        <Text style={[styles.label, styles.text, {marginTop: vh(34)}]}>
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
    width: vw(307),
    marginTop: vh(106),
  },
  label: {
    fontSize: vw(21),
    lineHeight: vw(25),
  },
  input: {
    height: vh(61),
    marginTop: vh(29),
    paddingLeft: vw(15),
    paddingRight: vw(15),
    fontSize: vw(12.5379),
    lineHeight: vw(15),
    color: '#999999',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,

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
    borderRadius: 10,

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

export default LoginForm;
