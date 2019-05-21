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
            <Text style={styles.totals}>Günlük Toplam</Text>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.footsteps} />
            </View>

            <View style={styles.stepTextContainer}>
              <Text style={styles.small}>10000</Text>
              <Text style={styles.smaller}>Adım</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.runner} />
            </View>

            <View style={styles.distanceWalkRunContainer}>
              <Text style={styles.small}> 3 Km </Text>
              <Text style={styles.smaller}>Yürüme - Koşma Mesafesi</Text>
            </View>
          </View>

          <View style={styles.infoCards}>
            <View style={styles.imageContainer}>
              <Image style={styles.images} source={images.stairs} />
            </View>
            <View style={styles.flightsClimbedContainer}>
              <Text style={styles.small}>
                <Text style={styles.smaller}>7 Kat</Text>
              </Text>
              <Text style={styles.smaller}>Çıkılan Kat</Text>
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
