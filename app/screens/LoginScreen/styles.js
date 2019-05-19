/* @flow */
import { Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
  textMailInput: {
    borderRadius: 5,
    top: screenHeight * 0.293,
  },
  textPasswordInput: {
    borderRadius: 5,
    top: screenHeight * 0.421,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Poppins',
    width: screenWidth * 0.154,
    height: screenHeight * 0.218,
    top: screenHeight * 0.172,
    marginHorizontal: 150,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    marginTop: screenHeight * 0.024,
    backgroundColor: '#FFF',
    width: screenWidth * 0.946,
    height: screenHeight * 0.061,
  },
  buttonTextStyle: {
    fontWeight: 'Apple SD Gothic Neo',
    color: '#206C9D',
    fontSize: 18,
  },
  forgotPassword: {
    marginTop: screenHeight * 0.035,
    color: '#ffffffEE',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Apple SD Gothic Neo',
  },
  createAccount: {
    marginTop: screenHeight * 0.045,
    color: '#ffffffEE',
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Apple SD Gothic Neo',
  },
  iconBtn: {
    margin: 8,
    backgroundColor: '#FFFFCC',
  },
  touchable: {
    flex: 1,
  },
};

export default styles;
