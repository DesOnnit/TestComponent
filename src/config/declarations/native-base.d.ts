import theme from 'theme/themeConfig';

declare module 'native-base' {
  type CustomThemeType = typeof theme;

  interface ICustomTheme extends CustomThemeType {}
}
