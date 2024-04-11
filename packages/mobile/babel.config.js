module.exports = {
  "presets": ['module:@react-native/babel-preset'],
  "plugins": [
    ["module-resolver", {
      "root": ["./"],
      "alias": {
        "*": ["./node_modules/*", "../../node_modules/*"]
      }
    }],
    'react-native-reanimated/plugin',
    'module:react-native-dotenv',
  ]
};
