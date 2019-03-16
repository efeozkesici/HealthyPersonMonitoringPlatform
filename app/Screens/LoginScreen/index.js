import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInputCustom } from 'components';
import { FormValidation, Alert } from 'utils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from '.styles';

type Props = any;
type State = {
  serviceCall: boolean,
  icons: Array<Object>
};

class LoginScreen extends Component<Props, State>{
    static defaultProps: any;

    constructor(props) {
        super(props);
        this.state = {
          serviceCall: false,
        };
      }

      render() {
          return(
              <View>Hello World.</View>
          )
      }
}