import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#0F94B4',
  },
  containerView: {
    flex: 0.95,
    backgroundColor: '#0F94B4',
    margin: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Gotham Rounded',
    marginTop: screenHeight * 0.172,
    marginLeft: screenWidth * 0.209,
  },
  mailInput: {
    borderRadius: 5,
    top: screenHeight * 0.293,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container2: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
  },
  forgatPassText: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
    marginRight: 10,
  },
  orText: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
    textAlign: 'center',
    marginTop: screenWidth / 20,
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: screenHeight * 0.036,
    backgroundColor: '#FFF',
    width: screenWidth * 0.813,
    height: screenHeight * 0.061,
    marginLeft: screenWidth * 0.053,
  },
  textStyle: {
    marginTop: screenHeight * 0.036,
    marginLeft: screenWidth * 0.208,
    color: '#FFF',
    fontFamiliy: 'Apple SD Gothic Neo',
    fontSize: 16,
  },
  buttonTextStyle: {
    fontWeight: 'Apple SD Gothic Neo',
    color: '#206C9D',
    fontSize: 18,
  },
  socialLoginView: {
    marginTop: screenWidth / 20,
    flexDirection: 'row',
    minHeight: 50,
    justifyContent: 'space-between',
  },
  socialLoginButton: {
    flex: 1,
    width: (screenWidth - 70) / 2,
    borderWidth: 1,
    borderColor: '#D5D5D5',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createAccount: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountText: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
  },
  createAccountButton: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#19769F',
  },
};

export default styles;
