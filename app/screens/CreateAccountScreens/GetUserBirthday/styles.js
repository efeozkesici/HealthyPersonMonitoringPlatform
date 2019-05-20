import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView: {
    flex: 1,
  },
  titleView: {
    justifyContent: 'center',
    flex: 0.2,
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gotham Rounded',
    color: '#3D3D3D',
  },
  pickerRectangleView: {
    flex: 0.6,
    alignItems: 'center',
  },
  pickerRectangle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth - 15,
    height: screenHeight / 2,
  },
  pickerView: {
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 0.6,
    marginTop: screenHeight / 5,
  },
  picker: {
    width: screenWidth / 3 - 5,
    height: (screenHeight / 2) - 20,
    bottom: 5,
  },
  buttonView: {
    marginHorizontal: 20,
    flex: 0.2,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Raleway',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
};

export default styles;
