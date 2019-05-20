/* @flow */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, TextInputCustom, Loading } from 'components';
import { FormValidation, Alert, Navigate } from 'utils';
import * as AuthActions from 'actions/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

type Props = any;

type State = {
  serviceCall: boolean,
  icons: Array<Object>
};

class LoginScreen extends Component<Props, State> {
  static defaultProps: any;

  constructor(props) {
    super(props);
    this.state = {
      serviceCall: false,
    };
  }

  componentDidUpdate() {
    const {
      state: { serviceCall },
    } = this;
    const {
      props: { auth },
    } = this;
    if (serviceCall && !auth.isLoading) {
      if (auth.error) {
        Alert.showInfo('Hata', auth.errorDescription);
      }
    }
  }

  emailLogin(): void {
    const params = {
      eMail: (this: any).emailField.getText(),
      password: (this: any).passwordField.getText(),
    };

    const {
      props: { loginEmail },
    } = this;

    if (!FormValidation.isEmpty(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen email giriniz!');
    } else if (!FormValidation.validateEmail(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen geçerli bir email giriniz!');
    } else if (!FormValidation.isEmpty(params.password)) {
      Alert.showInfo('Hata', 'Lütfen şifrenizi giriniz!');
    } else if (!FormValidation.validatePasswordLength(params.password)) {
      Alert.showInfo('Hata', 'Şifre en az 8 karakter olmalıdır!');
    } else {
      this.setState({ serviceCall: true });
      loginEmail(params.eMail, params.password);
    }
  }

  render() {
    const {
      props: { auth, componentId },
    } = this;

    return (
      <View style={styles.container}>
        {auth.isLoading ? <Loading /> : null}
        <KeyboardAwareScrollView
          style={styles.containerView}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Giriş</Text>
            <TextInputCustom
              style={styles.textMailInput}
              ref={(ref) => {
                (this: any).emailField = ref;
              }}
              placeholder="E-Mail"
              placeholderTextColor="white"
            />
            <TextInputCustom
              style={styles.textPasswordInput}
              ref={(ref) => {
                (this: any).passwordField = ref;
              }}
              placeholder="Şifre"
              placeholderTextColor="white"
              secureTextEntry
              returnKeyType="done"
            />
            <Button
              buttonStyle={styles.buttonStyle}
              buttonTextStyle={styles.buttonTextStyle}
              text="Giriş"
              onPress={() => {
                this.emailLogin();
              }}
            />
            <View>
              <TouchableOpacity style={styles.touchable} activeOpacity={0.6} onPress={() => Navigate.push(componentId, 'GetUserInfoScreen')}>
                <Text style={styles.createAccount}>Hesap Olustur</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchable} activeOpacity={0.6} onPress={() => Navigate.push(componentId, 'ForgotPasswordScreen')}>
                <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  loginEmail: propTypes.func.isRequired,
};

LoginScreen.defaultProps = {};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  loginEmail: (eMail, password) => dispatch(AuthActions.loginEmail.request(eMail, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
