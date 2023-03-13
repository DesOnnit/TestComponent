import React from 'react';

import { NativeBaseProvider } from 'native-base';

import AppNavigator from 'navigation/AppNavigator';

import { persistor, setupStore } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from 'theme/themeConfig';

// Инициализация навигации проекта
const App = () => {
  // Вывод компонента с обертками
  const renderContent = () => (
    <SafeAreaProvider>
      <Provider store={setupStore}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider theme={theme}>
            <AppNavigator />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );

  return renderContent();
};

export default App;
