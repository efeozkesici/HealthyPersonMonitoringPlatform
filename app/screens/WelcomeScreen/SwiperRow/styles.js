/* @flow */
/*const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 10,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    color: '#FFF',
  },
};*/
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  swiperRow: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'#0F94B4'
  },
  image1: {
    width: screenWidth*0.682,
    height: screenHeight*0.315,
    resizeMode: 'contain',
    marginBottom: 40,
    marginTop: screenHeight*0.100
  },
  image2: {
    resizeMode: 'contain',
    marginBottom: 40,
    position:'absolute',
    marginTop: screenHeight*0.029,
    width: screenWidth*0.952,
    height: screenHeight*0.439
  },
  image3:{
    resizeMode: 'contain',
    marginBottom: 40,
    position:'absolute',
    marginTop: screenHeight*0.062,
    width: screenWidth*0.946,
    height: screenHeight*0.437
  },
  /*whiteArea:{
    resizeMode: 'contain',
    position: 'absolute',
    width: screenWidth,
    marginTop: (screenHeight/4),
    height:(screenHeight/7)*5,
    
  },
  textView:{
    resizeMode: 'contain',
    position: 'absolute',
    width: screenWidth,
    marginTop: (screenHeight/2),
    height:(screenHeight/7)*2,
  },
  textHeader: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 25,
    fontFamily: 'Gotham Rounded',
    color: '#3E3E3E'
  },*/
  text: {
    textAlign: 'center',
    /*width: screenWidth*0.9700,*/
    height: screenHeight*0.201,
    /*marginTop:screenHeight*0.397,*/
    marginHorizontal: screenWidth*0.029,
    fontSize:35,
    fontFamily: 'Bold',
    color: '#FFFFFF'
  },
  buttonView: {
    marginHorizontal: 50,
    position: 'absolute',
    bottom: 50,
  },
  buttonStyle: {
    width: screenWidth*0.906,
    height: screenHeight*0.049,
    backgroundColor: '#3864A6',
    borderRadius: 5,
    position: 'absolute',
    top:screenHeight*0.86
  },
  buttonTextStyle: {
    fontSize:18,
    fontFamily: 'Gotham Rounded',
    color: '#FFF'
  }
};

export default styles;
