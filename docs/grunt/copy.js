module.exports = {
  replaceApplicationSass: {
    files: {
      "<%= package.paths.temp %>/stylesheets/application.sass": "<%= package.paths.templates %>/application-with-bower.sass"
    }
  }
}

