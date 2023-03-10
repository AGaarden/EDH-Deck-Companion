/* eslint no-undef: 0 */
module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo']
  };
};
