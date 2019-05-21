import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { images } from 'resources';
import styles from './styles';

type Props = any;
type State = any;

class ShowBloodPressureScreen extends Component<Props, State> {
  static defaultProps: any;

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dashConditionWrapper}>
          <View style={styles.dashFaceContainer}>
            <Image source={images.face_03} style={styles.feelingFace} />
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
                style={styles.pressureImageStyle}
                source={images.pressure}
              />
            </View>
            <View style={styles.deltaChanges}>
              <View style={styles.deltaChange}>
                <View style={styles.dashOverallRisk}>
                  <Text style={styles.dataTitle}>Son Ölçülen Tansiyon:</Text>
                  <Text style={styles.greatBloodPressure}>120 mmgh</Text>
                  <Text style={styles.lowBloodPressure}>80 mmgh</Text>
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
)(ShowBloodPressureScreen);
