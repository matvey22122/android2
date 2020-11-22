import React, {useContext} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {ApiContext} from '../context/ApiContext';
import {Title} from '../components/Title';
import Task from '../components/Task';
import {vh, vw} from '../mixin';
import Counter from '../components/Counter';
import AddTaskButton from '../components/AddTaskButton';

const TasksPage = ({navigation}) => {
  const {tasks, deleteTask} = useContext(ApiContext);
  return (
    <View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.block}>
          <Title title={'Tasks'} />
          <View style={styles.tasks}>
            {tasks.map((task, i) => (
              <Task key={i} task={task} doneTask={deleteTask} index={i} />
            ))}
          </View>
        </View>
        <Counter />
      </ScrollView>
      <AddTaskButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: vh(7.5),
    marginLeft: vw(9),
    marginRight: vw(9),
  },
  tasks: {
    flexDirection: 'column',
    marginTop: vh(6),
  },
});

export default TasksPage;
