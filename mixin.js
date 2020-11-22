import {Dimensions, PixelRatio} from 'react-native';

const iphoneWidth = 375;
const iphoneHeight = 812;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const vw = (num) => {
  return PixelRatio.roundToNearestPixel((num / iphoneWidth) * screenWidth);
};

export const vh = (num) => {
  return PixelRatio.roundToNearestPixel((num / iphoneHeight) * screenHeight);
};

export const getToday = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Septegmber',
    'October',
    'November',
    'December',
  ];

  const date = new Date();
  const d = date.getDate();
  const m = monthNames[date.getMonth()].toLowerCase();
  const ye = date.getFullYear();

  return `${d} ${m} ${ye}`;
};
