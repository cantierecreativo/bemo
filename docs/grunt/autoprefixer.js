module.exports = {
  options: {
    browsers: ['last 2 versions', 'ie 8', 'ie 9']
  },
  build: {
    files: {
      '<%= package.paths.build %>/stylesheets/application.css': '<%= package.paths.build %>/stylesheets/application.css'
    }
  },
}

