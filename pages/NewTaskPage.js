import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Title} from '../components/Title';
import {vh, vw} from '../mixin';
import NewTaskForm from '../components/newTaskForm';

const NewTaskPage = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.block}>
        <Title title={'New Task'} />
        <NewTaskForm navigation={navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',

    marginTop: vh(63),
    marginLeft: vw(34),
    marginRight: vw(34),
  },
});

export default NewTaskPage;
