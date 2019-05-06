/* @flow */

import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = {
  header: {
    backgroundColor: "#00BFFF",
    height: 150
  },

  avatar:{
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:80
  },

  body:{
    marginTop: 40
  },

  bodyContext: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },

  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    marginLeft: screenWidth*0.30,
    marginTop: screenHeight*0.04
  },

  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },

  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },

  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
    marginLeft: screenWidth * 0.20
  },

  buttonStyle: {
    backgroundColor: '#FF0000',
    width:250,
    height: screenHeight*0.045
  },

  buttonTextStyle: {
    fontWeight: 'Apple SD Gothic Neo',
    color: '#206C9D',
    fontSize: 18
  }

  /*container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }*/
};

export default styles;
