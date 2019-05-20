/* @flow */
import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Navigate } from 'utils';
import styles from './styles';
import { images } from '../../resources';

type Props = any;

class HomeScreen extends Component<Props> {
  render() {
    const {
      props: { componentId },
    } = this;
    return (
      <View style={styles.container}>
        <View style={styles.firstMenuView}>
          <TouchableOpacity
            onPress={() => Navigate.push(componentId, 'ShowPersonalStepsScreen')
            }
          >
            <View style={styles.menuButton}>
              <Image
                style={styles.runningManImageStyle}
                source={images.running_icon}
              />
              <Text>Adım Görüntüle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Navigate.push(componentId, 'ShowPulseScreen')}
          >
            <View style={styles.menuButton}>
              <Image
                style={styles.heartRateImageStyle}
                source={images.heart_rate}
              />
              <Text />
              <Text>Nabız Görüntüle</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.secondMenuView}>
          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Image
                style={styles.bloodPressureImageStyle}
                source={images.blood_pressure}
              />
              <Text />
              <Text>Tansiyon Görüntüle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menuButton}>
              <Text>Ölçüm Yap</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;

export default connect(mapStateToProps)(HomeScreen);
