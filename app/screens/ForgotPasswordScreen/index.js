import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Button, TextInputCustom, Loading } from 'components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { FormValidation, Alert } from 'utils';

type Props = any;
type State = {
    serviceCall: boolean,
};

class ForgotPasswordScreen extends Component<Props, State>{
    static defaultProps: any;

    constructor(props) {
        super(props);
        this.state = {
        serviceCall: false,
        };
    }

    render(){
        const{
            props:{button, placeHodlerStyle, componentId},
        } = this;
        return(
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Şifremi Unuttum</Text>
                </View>
                <TextInputCustom style = {styles.textMailInput}
                ref={(ref) => {
                    (this: any).emailField = ref;
                  }}
                  placeholder="E-Mail"
                  placeholderTextColor="white"
                />
                <Button
                text="Gönder"/>
            </View>
        );
    }
}

ForgotPasswordScreen.PropTypes = {
    componentId: PropTypes.string.isRequired
};