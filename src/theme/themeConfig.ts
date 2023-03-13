import { extendTheme } from 'native-base';

// Стандартные цвета
export const black = '#392413';
export const light = '#FFFFFF';

// Цвета приложения
export const primary = '#8AC43A';

// Цвета текста
export const textGray = '#392413';

const themeConfig = {
  colors: {
    black,
    light,

    primary,

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
