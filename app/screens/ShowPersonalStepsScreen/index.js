import React, { Component } from 'react';
import {
  // StyleSheet,
  Image,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { images } from 'resources';
import styles from './styles';

type Props = any;
type State = any;

class ShowPersonalStepsScreen extends Component<Props, State> {
  /* twoDecimalPlacesSteps() {
    const {
      props: { state },
    } = this;
    const props = state;
    const stepCount = Number(props.StepCount).toFixed(2);
    return stepCount;
  }

  twoDecimalPlacesDistanceWalkingRunning() {
    const props = this.props.state;
    const distance = Number(props.DistanceWalkingRunning).toFixed(2);
    return distance;
  } */

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userInfo}>
          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Yesterdays Totals</Text>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.footsteps} />
            </View>

            <View style={styles.stepTextContainer}>
              <Text style={styles.small}>1000</Text>
              <Text style={styles.smaller}>Steps</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.runner} />
            </View>

            <View style={styles.distanceWalkRunContainer}>
              <Text style={styles.small}> 3 Miles </Text>
              <Text style={styles.smaller}>Distance Walk/Run</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.stairs} />
            </View>
            <View style={styles.flightsClimbedContainer}>
              <Text style={styles.small}>
                <Text style={styles.smaller}>stories</Text>
              </Text>
              <Text style={styles.smaller}>Flights Climbed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPersonalStepsScreen);
