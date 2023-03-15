import type { StackScreenProps } from '@react-navigation/stack';

// Тип корневых экранов приложения
export type RootStackNavigationParamList = {
  ScreensAuthIndex: undefined;
  ScreensAuthHowWork: undefined;
  ScreensAuthAboutСompany: undefined;
  ScreensAuthAboutYou: undefined;
  ScreensAuthProvideServices: undefined;
  ScreensAuthEnteredData: undefined;
};

// Тип параметров экрана первого шага регистрации
export type ScreensAuthIndexProps =
StackScreenProps<RootStackNavigationParamList, 'ScreensAuthIndex'>;

// Тип параметров навигации экрана первого шага регистрации
export type ScreensAuthIndexNavigationProps = ScreensAuthIndexProps['navigation'];
