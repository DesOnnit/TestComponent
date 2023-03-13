import React, { ReactElement } from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ScreensAuthIndex from 'screens/auth/Index';

import { RootStackNavigationParamList } from 'models/Screens';

// Создание корневого стека навигации
const RootStack = createStackNavigator<RootStackNavigationParamList>();

// Настройки header и анимации экранов
const screenOptions = () => ({ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS });

// Компонент AppNavigator
const AppNavigator = (): ReactElement => {
  // Вывод компонента навигации
  const renderContent = () => (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions()}>
        <RootStack.Screen name='ScreensAuthIndex'
                          component={ScreensAuthIndex}
                          options={{ headerShown: false }} />

      </RootStack.Navigator>
    </NavigationContainer>
  );

  return renderContent();
};

export default AppNavigator;
