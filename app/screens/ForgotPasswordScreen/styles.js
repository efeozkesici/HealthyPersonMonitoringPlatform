import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerView: {
    flex: 0.95,
    backgroundColor: '#fff',
    margin: 15,
  },
  title: {
    color: '#19769F',
    fontSize: 30,
    fontFamily: 'Gotham Rounded',
    marginTop: screenHeight/30,
    marginBottom:screenHeight/40
  },
  formContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container2: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  remember: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Gotham Rounded',
    fontSize:16,
    color:'#95989A',
  },
  forgatPassText: {
    fontFamily: 'Gotham Rounded',
    fontSize:16,
    color:'#95989A',
    marginRight:10
  },
  orText: {
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
    textAlign: 'center',
    marginTop: screenWidth/20,
    alignItems: 'center'
  },
  buttonView: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Raleway',
    fontWeight: 'bold', 
    color: '#FFFFFF',
  },
  socialLoginView: {
    marginTop: screenWidth/20,
    flexDirection: 'row',
    minHeight: 50,
    justifyContent: 'space-between'
  },
  socialLoginButton:{
    flex:1,
    width: (screenWidth-70)/2,
    borderWidth: 1,
    borderColor:'#D5D5D5' ,
    borderRadius: 5,
    alignItems:'center',
    justifyContent: 'center'
  },
  createAccount:{
    marginTop:30,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  accountText:{
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#95989A',
  },
  createAccountButton:{
    fontFamily: 'Gotham Rounded',
    fontSize: 16,
    color: '#19769F',
  }
};

export default styles;