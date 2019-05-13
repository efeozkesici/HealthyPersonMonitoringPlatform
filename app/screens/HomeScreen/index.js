/* @flow */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import {images} from '../../resources';

type Props = any;

class HomeScreen extends Component<Props> {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.firstMenuView}>
          <TouchableOpacity onPress={() => {console.log('step')}}>
            <View style= {styles.menuButton}>
              <Image
              style={styles.runningManImageStyle}
              source={images['running_icon']}
              />
              <Text>Adım Görüntüle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {console.log('pulse')}}>
            <View style={styles.menuButton}>
              <Image
              style={styles.heartRateImageStyle}
              source={images['heart_rate']}/>
              <Text>Nabız Görüntüle</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(HomeScreen);
