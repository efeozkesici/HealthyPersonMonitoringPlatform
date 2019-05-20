import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Navigate } from 'utils';
import { Button, TextInputCustom } from 'components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

type Props = any;
type State = {
  serviceCall: boolean,
};

class GetUserInfoScreen extends Component<Props, State> {
  static defaultProps: any;

  onPress() {
    const {
      props: { componentId },
    } = this;

    const params = {
      name: this.nameField.getText(),
      eMail: this.emailField.getText(),
      cellPhone: this.cellPhoneField.getText(),
      password: this.passwordField.getText(),
      passwordAgain: this.passwordAgainField.getText(),
    };
    Navigate.push(componentId, 'GetUserBirthday', params);
  }

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
            <Text style={styles.title}>Kayıt Ol</Text>
            <TextInputCustom
              ref={(ref) => {
                this.nameField = ref;
              }}
              placeholder="İsim-Soyisim"
            />
            <TextInputCustom
              ref={(ref) => {
                this.emailField = ref;
              }}
              placeholder="E-Mail"
            />
            <TextInputCustom
              ref={(ref) => {
                this.cellPhoneField = ref;
              }}
              placeholder="Cep Tel"
              keyboardType="phone-pad"
            />
            <TextInputCustom
              ref={(ref) => {
                this.passwordField = ref;
              }}
              placeholder="Şifre"
              secureTextEntry
              returnKeyType="done"
            />
          </View>
          <Button
            style={styles.buttonView}
            textStyle={styles.buttonText}
            text="Sonra"
            onPress={() => {
              this.onPress();
            }}
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
)(GetUserInfoScreen);
