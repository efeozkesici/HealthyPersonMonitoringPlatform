/* @flow */
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import {images} from '../../../resources'
import { Button } from 'components';
import styles from './styles';

type Props = any;
class SwiperRow extends Component<Props> {
  static defaultProps: any;

  render() {
    const {
      props: {
        text, button, buttonText, onPressButton,
      },
    } = this;

    return (
      <View style = {styles.swiperRow}>
        <Image
          style={styles.image1}
          source={images[this.props.image1]}
        />
        <Image
          style={styles.image2}
          source={images[this.props.image2]}
        />
        <Image
        style={styles.image3}
        source={images[this.props.image3]}
        />
        <Image
          style={styles.whiteArea}
          source={images['rectangle']}
        />
        <View style={styles.textView}>
          <Text style={styles.textHeader}>{this.props.textHeader}</Text>
          <Text style={styles.text}>{this.props.text}</Text>
          <Text style={[styles.text,{fontWeight: 'bold', marginTop:0, fontFamily:'Raleway', color:'#000000'}]}>{this.props.textBold}</Text>
        </View> 
        {button ? (
          <Button
            buttonStyle={styles.buttonStyle}
            buttonTextStyle={styles.buttonTextStyle}
            text={buttonText}
            onPress={onPressButton}
          />
        ) : null}
      </View>
      );
    }
  }


SwiperRow.propTypes = {
  image1: propTypes.string,
  textHeader: propTypes.string,
  text: propTypes.string,
  textBold: propTypes.string,
  buttonText: propTypes.string,
  button: propTypes.func,
};

SwiperRow.defaultProps = {
  image1: '',
  image2: '',
  image3: '',
  textHeader: '',
  text: '',
  textBold: '',
  buttonText: '',
};

export default SwiperRow;
