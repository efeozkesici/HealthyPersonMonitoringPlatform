import React, {Component} from 'react';
import propTypes from 'prop-types';
import { KeyboardAvoidingView, StyleSheet, ImageBackground } from 'react-native';
import Login from './screens/Login';
import Register from './screens/Register'
import ForgotPassword from './screens/ForgotPassword';
import {w} from './api/Dimensions';

export default class index extends Component{
    state = {
        currentScreen : 'login',
    }

    changeScreen = screenName => () => {
        this.setState({currentScreen: screenName});
    }

    userSuccessfullyLoggedIn = (user) => {
        this.props.login(user);
    };

    render() {
        let screenToShow;

        switch(this.state.currentScreen) {
        case 'login':
            screenToShow = <Login change={this.changeScreen} success={this.userSuccessfullyLoggedIn}/>;
            break;
        case 'register':
            screenToShow = <Register change={this.changeScreen} />;
            break;
        case 'forgot':
            screenToShow = <ForgotPassword change={this.changeScreen}/>;
            break;
        }

        return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-w(40)}
            style={styles.container}
        >
            <ImageBackground
            source={this.props.background}
            style={styles.background}
            resizeMode="stretch"
            >
            {screenToShow}
            </ImageBackground>
        </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#555',
    },
    background: {
      width: '100%',
      height: '100%',
    }
});