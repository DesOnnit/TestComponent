import { extendTheme } from 'native-base';

// Стандартные цвета
export const black = '#392413';
export const light = '#FFFFFF';

// Цвета приложения
export const primary = '#8AC43A';
export const error = '#FF7171';

// Цвета текста
export const textGray = '#212121';

const themeConfig = {
  colors: {
    black,
    light,

    primary,
    error,

    textGray
  },
  fontConfig: {
    Inter: {
      600: { normal: 'Inter-SemiBold' },
      700: { normal: 'Inter-Bold' }
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
    mono: 'Inter'
  }
};

const theme = extendTheme(themeConfig);

export default theme;
