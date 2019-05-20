import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';

type Props = any;
type State = any;

class Header extends Component<Props, State> {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.headerTitle}>Pulse</Text>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
