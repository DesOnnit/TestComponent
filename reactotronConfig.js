import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import Config from 'react-native-config';

const reactotron = Reactotron.configure({ host: Config.REACTOTRON_IP })
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotron;
