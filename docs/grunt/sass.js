module.exports = {
  options: {
    require: [ 'sass-globbing' ],
    loadPath: [ './bower_components' ],
    style: 'expanded',
    noCache: true,
    bundleExec: true
    // trace: true
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

