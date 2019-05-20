import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'components';
import { Navigate } from 'utils';
import { WheelPicker } from 'react-native-wheel-picker-android';
// import moment from 'moment';
import styles from './styles';

var End = new Date();
var Start = moment(End).subtract(100, 'years');
var years = moment(End).diff(Start, 'years');
var yearsBetween = [];

for (var year = 0; year < years; year++) {
  yearsBetween.push(Start.year() + year);
}

const days = [];
for (var day = 1; day < 32; day++) {
  days.push(day);
}

const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];

const numberOfMonths = [
  { name: 'Ocak', id: '01' },
  { name: 'Şubat', id: '02' },
  { name: 'Mart', id: '03' },
  { name: 'Nisan', id: '04' },
  { name: 'Mayıs', id: '05' },
  { name: 'Haziran', id: '06' },
  { name: 'Temmuz', id: '07' },
  { name: 'Ağustos', id: '08' },
  { name: 'Eylül', id: '09' },
  { name: 'Ekim', id: '10' },
  { name: 'Kasım', id: '11' },
  { name: 'Aralık', id: '12' }
];

type Props = any;

type State = {
  serviceCall: boolean,
  icons: Array<Object>
};

class GetUserBirthday extends Component<Props, State> {
  static defaultProps: any;

  constructor(props) {
    super(props);
    this.state = {
      selectedYear: yearsBetween[0],
      selectedDay: days[0],
      selectedMonth: months[0],
    };
  }

   getNumberOfMonth (Month) {
    for (i = 0; i < 12; i++){
      if(numberOfMonths[i].name === Month){
        return numberOfMonths[i].id;
      }
    }
  } 

  /* onPress() {
    let numberOfMonth = this.getNumberOfMonth(this.state.selectedMonth);
    let birthdayString = numberOfMonth+'-'+this.state.selectedDay+'-'+this.state.selectedYear;
    let birthdayUnix = moment( birthdayString, "MM-DD-YYYY");
    if (!birthdayUnix.isValid()) {
      Alert.showInfo('Hata', 'Geçersiz tarih seçtiniz!');
    } else {
      const params = {
        ...this.props.params,
        birthdayUnix: birthdayUnix.unix(),
      }
      Navigate.push(componentId, 'GetUserPhysicalProperties', params);
    }
  } */

  render() {
    const {
      props: { componentId },
    } = this;

    return (
      <View style={styles.container}>
        <View style={styles.containerView}>
          <View style={styles.titleView}>
            <Text style={styles.title}>Doğum Tarihi</Text>
          </View>
          <View style={styles.pickerView}>
            <WheelPicker
              onItemSelected={(event) => { this.setState({ selectedYear: event.data }); }}
              isCurved
              data={yearsBetween}
              style={styles.picker}
              selectedItemTextColor="#19769F"
            />
            <WheelPicker
              onItemSelected={(event) => { this.setState({ selectedDay: event.data }); }}
              isCurved
              data={days}
              style={styles.picker}
              selectedItemTextColor="#19769F"
            />
            <WheelPicker
              onItemSelected={(event) => { this.setState({ selectedMonth: event.data }); }}
              isCurved
              data={months}
              style={styles.picker}
              selectedItemTextColor="#19769F"
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              textStyle={styles.buttonText}
              text="Sonraki"
              onPress={() => Navigate.push(componentId, 'GetUserPhysicalProperties')}
            />
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
)(GetUserBirthday);
