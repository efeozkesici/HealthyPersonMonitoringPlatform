/* @flow */

import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTextStye: {
    color: 'gray',
    fontSize: 25,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica-Light' : 'monospace',
  },

  headerStyle: {
    marginLeft: screenWidth * 0.2,
    top: screenHeight * 0.01,
  },

  dataField: {
    marginTop: screenHeight * 0.03,
    paddingBottom: 5,
    borderTopWidth: 1,
    borderColor: '#1d2430',
  },
};

export default styles;
