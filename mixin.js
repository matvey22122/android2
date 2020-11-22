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
