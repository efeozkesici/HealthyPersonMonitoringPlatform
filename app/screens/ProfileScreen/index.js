/* @flow */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import firebase from 'react-native-firebase';
import { Navigate } from 'utils';
import { Button } from 'components';

type Props = any;

class ProfileScreen extends Component<Props> {

  static defaultProps: any;

  constructor(props) {
    super(props);
    this.state = {
      serviceCall: false,
    };
    const {
      props: { componentId },
    } = this;
  }

  /*signOut(): void {
    firebase.auth().signOut().then(function() {
      Navigate.push(componentId, 'LoginScreen');
    }).catch(function(error) {
      // An error happened.
    });
  }*/

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
                <Text>Yaş: 65</Text>  
              </TouchableOpacity>              
              <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text>Boy: 178</Text> 
              </TouchableOpacity>
              <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text>Kilo: 84</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(ProfileScreen);
