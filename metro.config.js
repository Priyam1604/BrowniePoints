// import DatePicker from 'react-native-date-picker';


const { getDefaultConfig } = require('@expo/metro-config');

module.exports = async function (metroConfig) {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      extraNodeModules: {
        ...defaultConfig.resolver.extraNodeModules,
        'react-native-picker': '/Users/priyam/Brownie_Points/node_modules/react-native-date-picker',
      },
    },
  };
};
