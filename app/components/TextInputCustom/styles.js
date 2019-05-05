/* @flow */
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = {
  itemView: {
    marginTop: screenHeight / 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 5,
  },
  focusedItemView: {
    marginTop: screenHeight / 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 5,
  },
  textInputStyle: {
    fontSize: 17,
    fontFamily: 'Segoe UI',
    color: '#9A9A9A',
    width: screenWidth*0.916,
    height: screenHeight*0.115,
    borderRadius: 5,
    textAlign: 'center',
    placeholderTextColor:'white'
  },
};

export default styles;
