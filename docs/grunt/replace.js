module.exports = {
  replaceApplicationSass: {
    options: {
      patterns: [
        {
          match: new RegExp("@import 'addons/font-family'"),
          replacement: "@import 'bourbon/dist/addons/font-family'"
        },
        {
          match: new RegExp("@import 'bourbon'"),
          replacement: "@import 'bourbon/dist/bourbon'"
        },
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

