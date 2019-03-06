import { Navigation } from 'react-native-navigation';
import { Redux } from 'utils';
import LoginScreen from './LoginScreen';

export default function screens(store: any = null){
    Navigation.registerComponent('LoginScreen', Redux.reduxStoreWrapper(LoginScreen, store));
}