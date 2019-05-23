/* @flow */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat } from 'react-native-gifted-chat';
import styles from './styles';

// import * as MessagingActions from '../../redux/actions/messaging';

type Props = any;

class MessagingScreen extends Component<Props> {
  /* constructor(props) {
    super(props);
     this.state = {
      messages: this.props.messaging.messages,
    };
  } */

  /* shouldComponentUpdate(nextProps, nextState) {
    if (this.props.messaging.length !== nextProps.messaging.messages.length) {
      this.setState({ messages: nextProps.messaging.messages });
    }
    return true;
  }

  componentDidMount() {
    this.setState({ messages: this.props.messaging.messages });
  }

  componentWillMount() {
    this.props.getMessaging(this.props.user.userId);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    this.props.sendMessage(this.props.user.userId, null, messages[0]);
  } */

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text style={styles.headerTextStye}>Dr. Gökhan Öncül</Text>
        </View>
        <View style={styles.dataField} />
        <GiftedChat />
      </View>
    );
  }
}

/* const mapStateToProps = state => ({
  messaging: state.messaging,
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
  sendMessage: (senderId, reciverId, message) => dispatch(
    MessagingActions.sendMessage.request(senderId, reciverId, message),
  ),
  getMessaging: senderId => dispatch(MessagingActions.getMessaging.request(senderId)),
}); */

const mapStateToProps = null;
const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagingScreen);
