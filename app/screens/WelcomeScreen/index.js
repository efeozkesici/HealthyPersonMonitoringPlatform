/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import {images} from '../../resources'
import { Navigate } from 'utils';
import SwiperRow from './SwiperRow';
import styles from './styles';

type Props = any;

type State = {
  showDots: boolean,
  swipeElements: Array<Object>,
};

class WelcomeScreen extends Component<Props, State> {
  static defaultProps: any;

  constructor(props) {
    super(props);
    const {
      props: { componentId },
    } = this;
    this.state = {
      swipeElements: [
        {
          image1: 'heart_rate',
          text: 'Nabız özelliği ile nabızınızı kontrol edebilirsiniz.',
          button:null
        },
        {
          image2: 'bleeding_icon',
          text: 'Kanama kaydı özelliği ile kanamalarınızı kolayca kayıt altına alın',
          button: null
        },
        {
          image3: 'running_icon',
          text: 'Fiziksel aktivite kaydı ile aktivitelerinizi kayıt altına alın',
          button: true,
          buttonText: 'Başla',
          onPressButton: () => {Navigate.push(componentId, 'LoginScreen');}
        }
      ],
      disableSwip:true
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <Swiper
          onMomentumScrollEnd={(e, state, context)=>{
            if(state.index == 2){
              this.setState({disableSwip:false})
            } else {
              this.setState({disableSwip:true})
            }
          }}
          activeDotStyle={styles.activeDotStyle}
          dotStyle={styles.dotStyle}
          paginationStyle={styles.paginationStyle}
          loop={false}
          showsButtons={this.state.disableSwip}
          showsPagination={this.state.disableSwip}
          buttonWrapperStyle = {{
            alignItems: 'flex-end'
          }}
          nextButton={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
            <Image 
                style={{
                  resizeMode:'contain',
                }}
                source={images['rectangleBlue']}
              />
              <Image
                style={{
                  resizeMode: 'contain',
                  position: 'absolute'
                }}
                source={images['forwardArrow']}
              />
            </View>
          }
          prevButton={
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                source={images['rectangleWhite']}
              />
              <Image
                style={{
                  position: 'absolute'
                }}
                source={images['backArrow']}
              />
            </View>
          }
        >
          {this.state.swipeElements.map((item, key)=>(
            <SwiperRow
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              textHeader={item.textHeader}
              text={item.text}
              buttonText={item.buttonText}
              button={item.button}
              onPressButton={item.onPressButton}
              key={key}
            />
          ))}              
        </Swiper>
      </View>
    );
  }
}

WelcomeScreen.propTypes = {
  componentId: PropTypes.string.isRequired,
};
WelcomeScreen.defaultProps = {};

const mapStateToProps = null;

export default connect(mapStateToProps)(WelcomeScreen);
