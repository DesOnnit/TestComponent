module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        root: ['./src'],
        alias: { 'svg': './src/components/svg', 'helpers': './src/components/helpers', 'src': './src', 'jest': './jest' }
      },
      'react-native-dotenv'
    ],
    'react-native-reanimated/plugin'
  ],
};
