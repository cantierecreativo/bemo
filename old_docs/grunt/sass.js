module.exports = {
  options: {
    includePaths: [ './bower_components' ],
    outputStyle: 'nested'
  },
  compile: {
    files: {
      '<%= package.paths.build %>/stylesheets/application.css': '<%= package.paths.temp %>/stylesheets/application.sass'
    }
  },
  styleguide: {
    files: {
      '<%= package.paths.build %>/stylesheets/styleguide.css': 'styleguide.sass'
    }
  }
};

