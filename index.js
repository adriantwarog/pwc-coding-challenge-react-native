/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/Containers/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// Removed as some legacy modules constantly bring warnings. Ie. React Navigation
console.disableYellowBox = true;