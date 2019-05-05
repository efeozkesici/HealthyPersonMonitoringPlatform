/* @flow */
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Button, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
//import Dialogflow from 'react-native-dialogflow';

type Props = any;

class HomeScreen extends Component<Props> {

  constructor(props){
    super(props);
  }

  /*twoDecimalPlacesSteps(){
    const props = this.props.state;
    let stepCount = Number(props.StepCount).toFixed(2);
    return stepCount;
  }

  twoDecimalPlacesDistanceWalkingOrRunning(){
    const props = this.props.state;
    let distance = Number(props.DistanceWalkingRunning).toFixed(2);
    return distance;
  }

  handleListening() {
    Dialogflow.startListening(result => {
      let speech = result.result;
    }, error => {
      handleError(error.message)
    });
  }

  handleStopListening() {
    Dialogflow.finishListening();
  }*/

  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(HomeScreen);
