/* @flow */
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import firebase from 'react-native-firebase';

type Props = any;

class ProfileScreen extends Component<Props> {

  signOut(): void {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

  render() {
    /*return (
      <View style={styles.container}>
        <Text>ProfileScreen</Text>
      </View>
    );*/
    return(
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
        <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Efe Ali Özkesici</Text>
              <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text>Yaş: </Text>  
              </TouchableOpacity>              
              <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text>Boy:</Text> 
              </TouchableOpacity>
              <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text>Kilo:</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(ProfileScreen);
