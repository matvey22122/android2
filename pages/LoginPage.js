import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Title} from '../components/Title';
import {vh, vw} from '../mixin';
import LoginForm from '../components/LoginForm';

const LoginPage = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.block}>
        <Title title={'Welcome to a todo app'} />
        <LoginForm navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',

    marginTop: vh(8),
    marginLeft: vw(9),
    marginRight: vw(9),
  },
});

export default LoginPage;
