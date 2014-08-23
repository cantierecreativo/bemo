var _ = require('lodash');

module.exports = {
  requireOption: function(grunt, composedKey) {
    var config = grunt.config.get('bemo');

    if (!config) {
      throw grunt.util.error("Missing 'bemo' configuration!");
    }

    var keys = ['bemo'];

    _.each(composedKey.split("."), function(key) {
      keys.push(key);

      config = config[key];

      if (!config) {
        throw grunt.util.error("Missing '" + keys.join(".") + "' configuration!");
      }
    });

    return config;
  }
};

