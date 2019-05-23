/* @flow */
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import styles from './styles';

type Props = any;

class MessagingScreen extends Component<Props> {
  /* constructor(props) {
    super(props);
  } */

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat />
      </View>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagingScreen);
