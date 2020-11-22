import React, {useState} from 'react';
import {ApiContext} from './ApiContext';

export const ApiState = ({children}) => {
  const [state, setState] = useState([]);

  const getTasks = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        res.json().then((data) => {
          setState(data.slice(0, Math.min(20, data.length)));
        });
      })
      .catch((err) => console.log(err));
  };

  const addTask = async (title) => {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const date = new Date();
    const d = date.getDate();
    const m = monthNames[date.getMonth()].toLowerCase();
    const ye = date.getFullYear();

    const task = {
      title,
      date: `${d} ${m} ${ye}`,
    };

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: task.title,
          body: task.date,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (res.status === 201) {
        setState(state.concat([task]));
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });

      if (res.status === 200) {
        setState(state.filter((task, i) => i !== id));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ApiContext.Provider
      value={{deleteTask, addTask, getTasks, tasks: state, setTasks: setState}}>
      {children}
    </ApiContext.Provider>
  );
};
