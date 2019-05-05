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
    //flex: 0.95,
    backgroundColor: '#0F94B4',
    margin: 15,
  },
  textMailInput:{
    borderRadius: 5,
    top: screenHeight*0.293
  },
  textPasswordInput: {
    borderRadius: 5,
    top: screenHeight*0.421
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'Poppins',
    width: screenWidth*0.154,
    height: screenHeight*0.218,
    top: screenHeight*0.172,
    marginHorizontal: 150
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  buttonStyle: {
    marginTop: screenHeight*0.024,
    backgroundColor: '#FFF',
    width: screenWidth*0.946,
    height: screenHeight*0.061
  },
  buttonTextStyle: {
    fontWeight: 'Apple SD Gothic Neo',
    color: '#206C9D',
    fontSize: 18
  },
  socialMediaStyles: {
      flex: 1,
      marginTop: screenHeight*0.030,
      flexDirection: 'row',
      justifyContent: 'space-around',
  },
  googlePlusButtonStyle: {
    width: screenWidth*0.426,
    height: screenHeight*0.061,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  facebookButtonStyle: {
    width: screenWidth*0.426,
    height: screenHeight*0.061,
    backgroundColor: '#FFFFFF',
    borderRadius: 5
  },
  forgotPassword: {
    textAlign: 'center',
    fontSize:14,
    fontFamily: 'Apple SD Gothic Neo',
    color: '#FFFFFF',
    top: 20
  },
  iconBtn: {
    margin: 8,
    backgroundColor: '#FFFFCC'
},
};

export default styles;
