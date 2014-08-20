var path = require('path');
var fs = require('fs');

module.exports = function(grunt) {
  grunt.registerTask('bemoRenameGlyphsSass', function() {

    var config = grunt.config.get('bemo').webfonts;

    fs.rename(
      path.join(path.dirname(config.sassDest), 'icons.css'),
      config.sassDest
    );
  });

  grunt.registerTask('bemo-webfonts', function() {
    grunt.loadNpmTasks('grunt-webfont');

    var config = grunt.config.get('bemo').webfonts;

    grunt.config.set('webfont', {
      bemo: {
        src: path.join(config.src, '*.svg'),
        dest: config.fontDest,
        destCss: path.dirname(config.sassDest),
        options: {
          hashes: false,
          relativeFontPath: '',
          htmlDemo: false,
          font: 'icons',
          template: path.resolve(__dirname, '../templates/_icon-glyphs.css'),
          types: ['eot', 'woff', 'ttf', 'svg']
        }
      }
    });

    grunt.task.run(
      'webfont:bemo',
      'bemoRenameGlyphsSass'
    );
  });
};

