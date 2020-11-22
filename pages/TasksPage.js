import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ApiContext} from '../context/ApiContext';
import {Title} from '../components/Title';
import Task from '../components/Task';
import {vh, vw} from '../mixin';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Counter from '../components/Counter';
import AddTaskButton from '../components/AddTaskButton';

const TasksPage = ({navigation}) => {
  const {tasks, deleteTask, setTasks} = useContext(ApiContext);

  const renderItem = ({item, index, drag, isActive}) => {
    return (
      <Task
        task={item}
        index={index}
        drag={drag}
        isActive={isActive}
        deleteTask={deleteTask}
      />
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.block}>
        <DraggableFlatList
          ListHeaderComponent={
            <>
              <Title title={'Tasks'} />
            </>
          }
          ListHeaderComponentStyle={{marginTop: vh(63), marginBottom: vh(48)}}
          showsVerticalScrollIndicator={false}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          scrollPercent={5}
          onDragEnd={({data}) => setTasks(data)}
        />
      </View>
      <Counter />
      <AddTaskButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: vw(34),
    marginRight: vw(34),
  },
});

export default TasksPage;
