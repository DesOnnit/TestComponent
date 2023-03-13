import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import Config from 'react-native-config';

import App from 'src/App';

import { name as appName } from './app.json';

if (Config.ENVIRONMENT === 'development') {
  import('./reactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
