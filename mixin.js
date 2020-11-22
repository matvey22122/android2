import {Dimensions} from 'react-native';

export const vw = (num) => {
  return (Dimensions.get('window').width / 100) * num;
};

export const vh = (num) => {
  return (Dimensions.get('window').height / 100) * num;
};
