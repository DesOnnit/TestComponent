import React, { ReactElement } from 'react';

import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ScreensAuthAboutYou from 'screens/auth/AboutYou';
import ScreensAuthAboutСompany from 'screens/auth/AboutСompany';
import ScreensAuthHowWork from 'screens/auth/HowWork';
import ScreensAuthIndex from 'screens/auth/Index';
import ScreensAuthProvideServices from 'screens/auth/ProvideServices';

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
        <RootStack.Screen name='ScreensAuthHowWork'
                          component={ScreensAuthHowWork}
                          options={{ headerShown: false }} />
        <RootStack.Screen name='ScreensAuthAboutСompany'
                          component={ScreensAuthAboutСompany}
                          options={{ headerShown: false }} />
        <RootStack.Screen name='ScreensAuthAboutYou'
                          component={ScreensAuthAboutYou}
                          options={{ headerShown: false }} />
        <RootStack.Screen name='ScreensAuthProvideServices'
                          component={ScreensAuthProvideServices}
                          options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );

  return renderContent();
};

export default AppNavigator;
