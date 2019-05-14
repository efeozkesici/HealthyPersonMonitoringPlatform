/* @flow */

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /*justifyContent: 'center',
    alignItems: 'center',*/
  },
  firstMenuView: {
    top: screenHeight*0.034,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 250,
  },
  secondMenuView: {
    top: screenHeight*0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 250
  },
  menuButton: {
    flex: 1,
    width:screenWidth*0.49,
    height: screenHeight*0.48,
    backgroundColor:'#D5D5D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  runningManImageStyle: {
    width: screenWidth*0.20,
    height: screenHeight*0.20,
  },
  heartRateImageStyle: {
    width: screenWidth*0.30,
    height: screenHeight*0.20,
  }
};

export default styles;
