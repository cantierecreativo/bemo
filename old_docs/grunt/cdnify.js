module.exports = {
  options: {
    flatten: true
  },
  fixGhPages: {
    files: {
      '<%= package.paths.build %>/index.html': '<%= package.paths.build %>/index.html',
      '<%= package.paths.build %>/stylesheets/application.css': '<%= package.paths.build %>/stylesheets/application.css'
    },
    options: {
      rewriter: function(url) {
        if (url.match(/^\/(stylesheets|fonts|images)/)) {
          url = '/bemo' + url;
        }
        return url;
      }
    }
  }
};

