var fs = require('fs');
var path = require('path');

var svgPath = "source/fonts/svg/*.svg";
var destFontPath = "source/fonts/";
var destSassPath = "source/stylesheets/lib/variables/_icon-glyphs.css.sass";

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
        src: svgPath,
        dest: destFontPath,
        destCss: path.dirname(destSassPath),
        options: {
          hashes: false,
          relativeFontPath: '',
          htmlDemo: false,
          font: 'icons',
          template: './.icon-glyphs-template.css',
          types: ['eot', 'woff', 'ttf']
        },
      }
    },
    fixname: {}
  });

  grunt.registerTask('fixname', 'Fix generated name', function() {
    fs.rename(
      path.join(path.dirname(destSassPath), 'icons.css'),
      destSassPath
    );
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.registerTask('default', ['webfont', 'fixname']);
};

