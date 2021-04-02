/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import App from './App';
import './i18n' 
AppRegistry.registerComponent(appName, () => App);
