module.exports = {
  replaceApplicationSass: {
    options: {
      patterns: [
        {
          match: new RegExp("@import 'normalize-scss'"),
          replacement: "@import 'normalize-scss/normalize'"
        }
      ]
    },
    files: {
      "<%= package.paths.temp %>/stylesheets/application.sass": "<%= package.paths.temp %>/stylesheets/application.sass",
    }
  }
}

