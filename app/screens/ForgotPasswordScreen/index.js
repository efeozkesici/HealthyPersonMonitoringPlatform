import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, TextInputCustom } from 'components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

type Props = any;
type State = {
  serviceCall: boolean,
};

class ForgotPasswordScreen extends Component<Props, State> {
  static defaultProps: any;

  /* constructor(props) {
    super(props);
     this.state = {
      serviceCall: false,
    };
  } */

  /* componentDidUpdate() {
    if (!this.props.auth.isLoading && this.state.serviceCall) {
      if (this.props.auth.error) {
        Alert.showInfo('Hata', this.props.auth.errorDescription);
      } else {
        Alert.showInfo('Bilgilendirme', 'Şifre sıfırlama maili gönderildi', ok=()=>Navigate.pop(this.props.navigator));
      }
      this.setState({ serviceCall: false });
    }
  }

  passwordReset() {
    const params = {
      eMail: this.emailField.getText()
    }

    if (!FormValidation.isEmpty(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen email giriniz!');
    } else if (!FormValidation.validateEmail(params.eMail)) {
      Alert.showInfo('Hata', 'Lütfen geçerli bir email giriniz!');
    } else {
      this.props.passwordReset(params.eMail);
      this.setState({ serviceCall: true });
    }
  } */

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={styles.containerView}
          automaticallyAdjustContentInsets={false}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formContainer}>
            <Text style={styles.title}>Şifremi Unuttum</Text>
            <TextInputCustom
              style={styles.mailInput}
              ref={(ref) => {
                this.emailField = ref;
              }}
              placeholder="E-Mail"
              placeholderTextColor="white"
            />
          </View>
          <View>
            <Text style={styles.textStyle}>Kayıtlı e-posta adresinize şifrenizi sıfırlayabilmeniz için bir link göndereceğiz.</Text>
          </View>
          <Button
            style={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            text="Gönder"
          />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordScreen);
