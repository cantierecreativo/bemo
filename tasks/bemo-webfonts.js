var path = require('path');
var fs = require('fs');
var utils = require('../lib/utils');

module.exports = function(grunt) {
  grunt.registerTask('bemoRenameGlyphsSass', function() {
    fs.rename(
      path.join(
        path.dirname(utils.requireOption(grunt, 'webfonts.sassDest')),
        'icons.css'
      ),
      utils.requireOption(grunt, 'webfonts.sassDest')
    );
  });

  grunt.registerTask('bemo-webfonts', function() {
    grunt.loadNpmTasks('grunt-webfont');

    var src = utils.requireOption(grunt, 'webfonts.src');
    var fontDest = utils.requireOption(grunt, 'webfonts.fontDest');
    var sassDest = utils.requireOption(grunt, 'webfonts.sassDest');

    grunt.config.set('webfont', {
      bemo: {
        src: path.join(src, '*.svg'),
        dest: fontDest,
        destCss: path.dirname(sassDest),
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

