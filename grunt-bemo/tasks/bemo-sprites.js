var _ = require('lodash');
var path = require('path');
var fs = require('node-fs-extra');

module.exports = function(grunt) {

  grunt.registerTask('bemoCleanTempSprites', function() {
    var config = grunt.config.get('bemo').sprites;
    var dir = path.join(config.src, "1x");

    fs.removeSync(dir);
    fs.removeSync(config.sassDest + ".tmp");
  });

  grunt.registerTask('bemo-sprites', function() {
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-spritesmith');

    var config = grunt.config.get('bemo').sprites;

    grunt.config.set('image_resize', {
      bemo: {
        options: { width: "50%" },
        files: [{
          expand: true,
          cwd: config.src,
          src: "*.png",
          dest: path.join(config.src, "1x")
        }]
      }
    });

    grunt.config.set('sprite', {
      bemoRetina: {
        padding: 6,
        algorithm: 'binary-tree',
        src: path.join(config.src, '*.png'),
        destImg: config.imageDest.replace('{{density}}', '2x'),
        destCSS: config.sassDest + ".tmp"
      },
      bemoNonRetina: {
        padding: 3,
        algorithm: 'binary-tree',
        src: path.join(config.src, "1x", "*.png"),
        destImg: config.imageDest.replace('{{density}}', '1x'),
        destCSS: config.sassDest,
        cssTemplate: function(context) {
          var template = fs.readFileSync(path.resolve(__dirname, '../templates/_sprites.css'), 'utf8');
          return _.template(template, context);
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

