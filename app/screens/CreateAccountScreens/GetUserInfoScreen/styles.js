import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').with;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0F94B4',
    justifyContent: 'center',
  },
  containerView: {
    backgroundColor: '#0F94B4',
    margin: 15,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontFamily: 'Gotham Rounded',
    marginTop: screenHeight / 30,
    marginBottom: screenHeight / 40,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonView: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginTop: 20,
    height: screenHeight * 0.061,
    width: screenWidth * 0.893,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
};

export default styles;
