/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage';
import TasksPage from './pages/TasksPage';
import NewTaskPage from './pages/NewTaskPage';
import {ApiState} from './context/ApiState';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
  },
};

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <ApiState>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Tasks" component={TasksPage} />
          <Stack.Screen name="NewTask" component={NewTaskPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApiState>
  );
};

export default App;
