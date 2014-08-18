module.exports = {
  options: {
    spawn: false
  },
  styleguide: {
    files: [ 'index.jade' ],
    tasks: [ 'buildStyleguide' ]
  },
  styleguideSass: {
    files: [ 'styleguide.sass' ],
    tasks: [ 'sass:styleguide' ]
  },
  source: {
    files: [ '<%= package.paths.source %>/**/*.sass' ],
    tasks: [ 'buildSass' ]
  }
};

