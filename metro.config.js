const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { generate } = require('@storybook/react-native/scripts/generate');

const defaultConfig = getDefaultConfig(__dirname);
let config = {
  ...defaultConfig,
};

if (process.env.STORYBOOK_ENABLED === 'true') {
  generate({
    configPath: path.resolve(__dirname, './.storybook'),
  });

  config.transformer.unstable_allowRequireContext = true;

  config.resolver.sourceExts.push('mjs');
}
module.exports = withNativeWind(config, { input: './global.css' });
