/* @flow */
import { Navigation } from 'react-native-navigation';
import { Redux } from 'utils';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import MessagingScreen from './MessagingScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import { GetUserInfoScreen, GetUserBirthday, GetPhysicalProperties } from './CreateAccountScreens';
import ShowPersonalStepsScreen from './ShowPersonalStepsScreen';
import ShowPulseScreen from './ShowPulseScreen';
import ShowBloodPressureScreen from './ShowBloodPressureScreen';

// registering all screens with redux...
export default function registerScreens(store: any = null) {
  Navigation.registerComponent('WelcomeScreen', Redux.reduxStoreWrapper(WelcomeScreen, store));
  Navigation.registerComponent('LoginScreen', Redux.reduxStoreWrapper(LoginScreen, store));
  Navigation.registerComponent('HomeScreen', Redux.reduxStoreWrapper(HomeScreen, store));
  Navigation.registerComponent('ProfileScreen', Redux.reduxStoreWrapper(ProfileScreen, store));
  Navigation.registerComponent('MessagingScreen', Redux.reduxStoreWrapper(MessagingScreen, store));
  Navigation.registerComponent('ForgotPasswordScreen', Redux.reduxStoreWrapper(ForgotPasswordScreen, store));
  Navigation.registerComponent('ShowPersonalStepsScreen', Redux.reduxStoreWrapper(ShowPersonalStepsScreen, store));
  Navigation.registerComponent('GetUserInfoScreen', Redux.reduxStoreWrapper(GetUserInfoScreen, store));
  Navigation.registerComponent('GetUserBirthday', Redux.reduxStoreWrapper(GetUserBirthday, store));
  Navigation.registerComponent('GetPhysicalProperties', Redux.reduxStoreWrapper(GetPhysicalProperties, store));
  Navigation.registerComponent('ShowPulseScreen', Redux.reduxStoreWrapper(ShowPulseScreen, store));
  Navigation.registerComponent('ShowBloodPressureScreen', Redux.reduxStoreWrapper(ShowBloodPressureScreen, store));
}
