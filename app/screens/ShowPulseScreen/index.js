import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { images } from 'resources';
import styles from './styles';

type Props = any;
type State = any;

class ShowPulseScreen extends Component<Props, State> {
  static defaultProps: any;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashConditionWrapper}>
          <View style={styles.dashFaceContainer}>
            <Image style={styles.feelingFace} source={images.face_03} />
          </View>
          <View style={styles.homeMood}>
            <View style={styles.activityContainer}>
              <Text style={styles.dashTitle}>Genel Durum: </Text>
              <Text style={styles.dashCondition}>Gayet İyi</Text>
            </View>
          </View>
        </View>
        <View style={styles.dataField}>
          <Image source={images.pulse} style={styles.pulseStyle} />
        </View>
        <View style={styles.dataField}>
          <View style={styles.dashRiskWrapper}>
            <View style={styles.dashOverallRisk}>
              <Image
                style={styles.heartImageStyle}
                source={images.cardiogram}
              />
            </View>
            <View style={styles.deltaChanges}>
              <View style={styles.deltaChange}>
                <View style={styles.dashOverallRisk}>
                  <Text style={styles.dataTitle}>Son Ölçülen Nabız:</Text>
                  <Text style={styles.dashRisk}>75</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.dataField}>
          <View style={styles.dashRiskWrapper}>
            <View style={styles.dashOverallRisk}>
              <Text>Haftalik Durum</Text>
              <Image source={images.fill_03} style={styles.weeklyImage} />
            </View>
            <View style={styles.deltaChanges}>
              <View style={styles.deltaChange}>
                <View style={styles.dashOverallRisk}>
                  <Text style={styles.dashStatus}>Gayet İyi!</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPulseScreen);
