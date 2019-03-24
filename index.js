import {AppRegistry} from 'react-native';
import index from './app/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => index);