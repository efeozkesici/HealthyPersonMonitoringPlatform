import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';7
import propTypes from 'prop-types';

type props = any;

export default class Button extends Component<props>{
    static defaultProps: any;

    render() {
        const {
            props: {text, buttonStyle, buttonTextStyle},
            props,
        } = this;
        return (
            <TouchableOpacity style={[styles.container, buttonStyle]} {...props}>
              <View style={styles.buttonText}>
                <Text style={buttonTextStyle}>{text}</Text>
              </View>
            </TouchableOpacity>
          );
    }    
}

Button.propTypes = {
    text: propTypes.string,
    buttonTextStyle: propTypes.object,
    buttonStyle: propTypes.object,
  };
  Button.defaultProps = {
    text: 'Button',
    buttonTextStyle: {},
    buttonStyle: {},
  };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        minHeight: 50,
        borderRadius: 3,
        backgroundColor: '#007aff',
    },
    buttonText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});