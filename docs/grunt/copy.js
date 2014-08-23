module.exports = {
  replaceApplicationSass: {
    files: {
      "<%= package.paths.temp %>/stylesheets/application.sass": "<%= package.paths.templates %>/application-with-bower.sass",
      "<%= package.paths.temp %>/stylesheets/functions/_url-functions.sass": "<%= package.paths.templates %>/_url-functions.sass"
    }
  }
}

