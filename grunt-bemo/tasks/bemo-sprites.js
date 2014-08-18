var _ = require('lodash');
var path = require('path');
var fs = require('fs');

module.exports = function(grunt) {

  grunt.registerTask('bemoCleanTempSprites', function() {
    var config = grunt.config.get('bemo').sprites;

    fs.unlinkSync(config.sassDest + ".tmp");
    var dir = path.join(path.dirname(config.src), "1x");
    fs.readdirSync(dir).forEach(function(file, index) {
      fs.unlinkSync(path.join(dir, file));
    });
    fs.rmdirSync(dir);
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
          cwd: path.dirname(config.src),
          src: "*.png",
          dest: path.join(path.dirname(config.src), "1x")
        }]
      }
    });

    grunt.config.set('sprite', {
      bemoRetina: {
        padding: 6,
        algorithm: 'binary-tree',
        src: config.src,
        destImg: config.imageDest.replace('{{density}}', '2x'),
        destCSS: config.sassDest + ".tmp"
      },
      bemoNonRetina: {
        padding: 3,
        algorithm: 'binary-tree',
        src: path.join(path.dirname(config.src), "1x", "*.png"),
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

