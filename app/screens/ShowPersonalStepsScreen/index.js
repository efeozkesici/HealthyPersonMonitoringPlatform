import React, { Component } from 'react';
import {
  // StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

type Props = any;
type State = any;

class ShowPersonalStepsScreen extends Component<Props, State> {
  twoDecimalPlacesSteps() {
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
  }

  render() {
    const {
      props: {
        firstName, lastLame, userAge, step, runner,
      },
    } = this;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.userInfo}>
          <View style={styles.firstLastContainer}>
            <Text style={styles.user}>
              {firstName}
              {lastLame}
            </Text>
            <Text style={styles.age}>{`Age: ${userAge}`}</Text>
          </View>

          <View style={styles.totalsContainer}>
            <Text style={styles.totals}>Yesterdays Totals</Text>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={step} />
            </View>

            <View style={styles.stepTextContainer}>
              <Text style={styles.small}>{this.twoDecimalPlacesSteps()}</Text>
              <Text style={styles.smaller}>Steps</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={runner} />
            </View>

            <View style={styles.distanceWalkRunContainer}>
              <Text style={styles.small}>
                {this.twoDecimalPlacesDistanceWalkingRunning()}
                <Text style={styles.smaller}>miles</Text>
              </Text>
              <Text style={styles.smaller}>Distance Walk/Run</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={stairs} />
            </View>
            <View style={styles.flightsClimbedContainer}>
              <Text style={styles.small}>
                {props.FlightsClimbed}
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

export default connect(ShowPersonalStepsScreen);
