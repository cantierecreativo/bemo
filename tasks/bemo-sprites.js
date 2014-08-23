var path = require('path');
var fs = require('node-fs-extra');
var utils = require('../lib/utils');

module.exports = function(grunt) {

  grunt.registerTask('bemoCleanTempSprites', function() {
    var dir = path.join(
      utils.requireOption(grunt, 'sprites.src'),
      "1x"
    );

    fs.removeSync(dir);
    fs.removeSync(
      utils.requireOption(grunt, 'sprites.sassDest') + ".tmp"
    );
  });

  grunt.registerTask('bemo-sprites', function() {
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-spritesmith');

    var src = utils.requireOption(grunt, 'sprites.src');
    var imageDest = utils.requireOption(grunt, 'sprites.imageDest');
    var sassDest = utils.requireOption(grunt, 'sprites.sassDest');

    grunt.config.set('image_resize', {
      bemo: {
        options: { width: "50%" },
        files: [{
          expand: true,
          cwd: src,
          src: "*.png",
          dest: path.join(src, "1x")
        }]
      }
    });

    grunt.config.set('sprite', {
      bemoRetina: {
        padding: 6,
        algorithm: 'binary-tree',
        src: path.join(src, '*.png'),
        destImg: imageDest.replace('{{density}}', '2x'),
        destCSS: sassDest + ".tmp"
      },
      bemoNonRetina: {
        padding: 3,
        algorithm: 'binary-tree',
        src: path.join(src, "1x", "*.png"),
        destImg: imageDest.replace('{{density}}', '1x'),
        destCSS: sassDest,
        cssTemplate: function(context) {
          var template = fs.readFileSync(path.resolve(__dirname, '../templates/_sprites.css'), 'utf8');
          return grunt.template.process(template, { data: context });
        }
      }
    });

    grunt.task.run(
      'image_resize:bemo',
      'sprite:bemoRetina',
      'sprite:bemoNonRetina',
      'bemoCleanTempSprites'
    );
  });
};

