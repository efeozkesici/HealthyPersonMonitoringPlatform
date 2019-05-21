/* @flow */

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: screenHeight * 0.05,
  },
  firstMenuView: {
    top: screenHeight * 0.034,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 250,
  },
  secondMenuView: {
    top: screenHeight * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 250,
  },
  menuButton: {
    flex: 1,
    width: screenWidth * 0.49,
    height: screenHeight * 0.48,
    backgroundColor: '#D5D5D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  runningManImageStyle: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.2,
  },
  heartRateImageStyle: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.2,
  },
  bloodPressureImageStyle: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.12,
  },
  measureImageStyle: {
    width: screenWidth * 0.2,
    height: screenHeight * 0.12,
  },
};

export default styles;
