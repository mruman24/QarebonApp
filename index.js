/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler'
import './Src/i18n'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
